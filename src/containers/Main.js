import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Memoized scroll function
  const scrollToHash = useCallback(() => {
    const { hash } = window.location;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight || 70;

      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  // Handle splash screen timer
  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  // Mark content as ready after splash ends and DOM renders
  useEffect(() => {
    if (!isShowingSplashAnimation) {
      // Wait for DOM to fully render
      const timer = setTimeout(() => setContentReady(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isShowingSplashAnimation]);

  // Handle initial hash scroll when content is ready
  useEffect(() => {
    if (contentReady && window.location.hash) {
      // Small delay to ensure all sections are rendered
      const timer = setTimeout(scrollToHash, 200);
      return () => clearTimeout(timer);
    }
  }, [contentReady, scrollToHash]);

  // Handle hash changes during navigation
  useEffect(() => {
    const handleHashChange = () => {
      setTimeout(scrollToHash, 50);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToHash]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StartupProject />
            <Achievement />
            <WorkExperience />
            <Projects />
            <StackProgress />
            <Education />
            <Blogs />
            <Talks />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
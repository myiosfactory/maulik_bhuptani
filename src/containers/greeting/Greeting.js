import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {greeting.title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p className={isDark ? "dark-mode small-subtitle" : "small-subtitle"}>
              {greeting.subHeader}
            </p>

            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>

            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                src={require("../../assets/images/skill.svg")}
                alt="developer"
              />
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
}

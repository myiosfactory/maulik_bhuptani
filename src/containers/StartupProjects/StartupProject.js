import React, { useContext, useState, useRef, useEffect, useCallback } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (fullscreenVideo) {
          closeVideo();
        }
        if (fullscreenImage) {
          setFullscreenImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [fullscreenVideo, fullscreenImage]);

  // Handle video when fullscreen opens
  // useEffect(() => {
  //   if (fullscreenVideo && videoRef.current) {
  //     // Small delay to ensure DOM is ready
  //     const timer = setTimeout(() => {
  //       videoRef.current?.play().catch(err => {
  //         console.log("Autoplay prevented:", err);
  //       });
  //     }, 100);
  //     return () => clearTimeout(timer);
  //   }
  // }, [fullscreenVideo]);

  // Replace your video useEffect with this:
  useEffect(() => {
    if (fullscreenVideo && videoRef.current) {
      const video = videoRef.current;

      const handleCanPlay = () => {
        video.play().catch(err => {
          console.log("Autoplay prevented:", err);
        });
      };

      const handleWaiting = () => {
        console.log("Video buffering...");
        // Optionally show a loading spinner here
      };

      const handlePlaying = () => {
        console.log("Video playing");
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, [fullscreenVideo]);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win && win.focus();
  }

  // Close video handler
  const closeVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setFullscreenVideo(null);
  }, []);

  // Handle overlay close - only close if clicking the overlay itself
  const handleOverlayClick = useCallback((e, closeFunc) => {
    if (e.target === e.currentTarget) {
      closeFunc();
    }
  }, []);

  // Prevent click events inside video container from bubbling
  const handleVideoContainerClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!bigProjects.display) return null;

  const ProjectContent = () => (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => (
            <div
              key={i}
              className={
                isDark
                  ? "dark-mode project-card project-card-dark"
                  : "project-card project-card-light"
              }
            >
              <div
                className="project-image"
                onClick={() =>
                  project.video
                    ? setFullscreenVideo(project.video)
                    : setFullscreenImage(project.image)
                }
              >
                <img src={project.image} alt={project.projectName} className="card-image" />
                {project.video && (
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {project.projectName}
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  {project.projectDesc}
                </p>

                {project.footerLink && (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, index) => (
                      <span
                        key={index}
                        className={
                          link.name === "App Store"
                            ? "appstore-tag"
                            : isDark
                              ? "dark-mode project-tag"
                              : "project-tag"
                        }
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name === "App Store" && (
                          <i className="fab fa-apple appstore-icon"></i>
                        )}
                        {link.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Fullscreen Video */}
      {fullscreenVideo && (
        <div
          className="fullscreen-overlay"
          onClick={(e) => handleOverlayClick(e, closeVideo)}
        >
          <div className="video-container" onClick={handleVideoContainerClick}>
            <video
              ref={videoRef}
              className="fullscreen-video"
              src={fullscreenVideo}
              controls
              playsInline
              webkit-playsinline="true"
              preload="auto"
              controlsList="nodownload"
            />
          </div>
          <button
            className="close-button"
            onClick={closeVideo}
            aria-label="Close video"
          >
            ✕
          </button>
          <span className="video-controls-hint">Tap outside or ✕ to close</span>
        </div>
      )}

      {/* Fullscreen Image */}
      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={(e) => handleOverlayClick(e, () => setFullscreenImage(null))}
        >
          <img src={fullscreenImage} alt="Full view" />
          <span className="close-hint">Click anywhere to close</span>
        </div>
      )}

      {/* Project List */}
      {isMobile ? (
        <ProjectContent />
      ) : (
        <Fade bottom duration={1000} distance="20px">
          <ProjectContent />
        </Fade>
      )}
    </>
  );
}

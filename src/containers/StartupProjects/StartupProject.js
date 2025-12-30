import React, { useContext, useState, useRef, useEffect } from "react";
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
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!fullscreenVideo && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {
        // ignore
      }
    }
  }, [fullscreenVideo]);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win && win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }

  const ProjectContent = () => (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>

        <p
          className={
            isDark
              ? "dark-mode project-subtitle"
              : "subTitle project-subtitle"
          }
        >
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
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="card-image"
                />

                {project.video && (
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-detail">
                <h5
                  className={isDark ? "dark-mode card-title" : "card-title"}
                >
                  {project.projectName}
                </h5>

                <p
                  className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                >
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
      {fullscreenVideo && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenVideo(null)}
        >
          <video
            className="fullscreen-video"
            src={fullscreenVideo}
            controls
            autoPlay
            ref={videoRef}
            onClick={e => e.stopPropagation()}
          />
          <span className="video-controls-hint">Click outside to close</span>
        </div>
      )}

      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <img src={fullscreenImage} alt="Full view" />
          <span className="close-hint">Click anywhere to close</span>
        </div>
      )}

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
import React, { useState, useEffect } from "react";
import styles from "./techCarousel.module.css";
import {
  FaPython,
  FaJs,
  FaDocker,
  FaLinux,
  FaAws,
  FaVuejs,
  FaReact,
  FaPhp,
  FaGit,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNuxtdotjs,
  SiFastapi,
  SiArduino,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiRedis,
} from "react-icons/si";

const TechCarousel = () => {
  const technologies = [
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Nuxt", icon: <SiNuxtdotjs /> },
    { name: "React", icon: <FaReact /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Arduino/ESP32", icon: <SiArduino /> },
    { name: "Git", icon: <FaGit /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow =
    window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 5 : 7;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (technologies.length - itemsToShow + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length, itemsToShow]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (technologies.length - itemsToShow + 1)
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prevButton}`}
        onClick={handlePrev}
      >
        &lt;
      </button>

      <div className={styles.carouselInner}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <div className={styles.techName}>{tech.name}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={handleNext}
      >
        &gt;
      </button>

      <div className={styles.carouselIndicators}>
        {Array.from({ length: technologies.length - itemsToShow + 1 }).map(
          (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                currentIndex === index ? styles.activeIndicator : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TechCarousel;

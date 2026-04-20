import React, { useEffect, useRef, useState } from "react";
import styles from "./intro.module.css";
import lottie from "lottie-web";
import developerAnimation from "../../assets/developer-animation.json";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Intro = () => {
  const animationContainer = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: developerAnimation,
      });

      return () => anim.destroy();
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="intro" className={styles.introSection}>
      <div className={`${styles.resp} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.introContainer}>
          <div className={styles.headingContainer}>
            <span className={styles.ola}>Olá, Mundo!</span>
            <h1 className={styles.introText}>
              <span className={styles.iam}> Eu sou </span>
              <span className={styles.introName}>Pedro Oliveira</span>
            </h1>
          </div>

          <div className={styles.typingContainer}>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "IoT Enthusiast",
                2000,
                "DevOps Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={styles.typingText}
            />
          </div>

          <p className={styles.introPara}>
            Transformando ideias em soluções digitais inovadoras. Estudante da
            Fatec Jessen Vidal, fascinado por tecnologia e apaixonado por criar
            experiências que impactam positivamente a vida das pessoas através
            do código.
          </p>

          <div className={styles.ctaContainer}>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/OliveiraPedro09"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pedrooliv9/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
            </div>

            <Link
              to="contato"
              smooth={true}
              duration={800}
              className={styles.ctaButton}
            >
              Vamos conversar
            </Link>
          </div>
        </div>

        <div
          className={`${styles.animationWrapper} ${
            isVisible ? styles.animVisible : ""
          }`}
        >
          <div
            ref={animationContainer}
            className={styles.animationContainer}
          ></div>
        </div>
      </div>

      <Link
        to="sobre"
        smooth={true}
        duration={600}
        className={styles.scrollIndicator}
      >
        <FaChevronDown className={styles.scrollIcon} />
        <span className={styles.scrollText}>Rolar para baixo</span>
      </Link>
    </section>
  );
};

export default Intro;

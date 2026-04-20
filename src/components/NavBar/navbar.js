import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import contact from "../../assets/call_icon.svg";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        <TypeAnimation
          sequence={[
            "Pedro Oliveira",
            3000,
            "Full Stack Dev",
            1500,
            "IoT Enthusiast",
            1500,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className={styles.logo}
        />
      </div>
      <div className={styles.desktopMenu}>
        <Link
          to="intro"
          offset={0}
          className={styles.desktopMenuListItem}
          smooth={true}
          duration={600}
        >
          Home
        </Link>
        <Link
          to="sobre"
          offset={0}
          className={styles.desktopMenuListItem}
          smooth={true}
          duration={600}
        >
          Sobre
        </Link>
        <Link
          to="projetos"
          offset={0}
          className={styles.desktopMenuListItem}
          smooth={true}
          duration={600}
        >
          Projetos
        </Link>
        <Link to="contato" offset={0} smooth={true} duration={600}>
          <button className={styles.desktopMenuBtn}>
            <img src={contact} alt="" className={styles.desktopMenuImg} />
            Entre em Contato
          </button>
        </Link>
      </div>
      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "Fechar" : "Menu"}
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            to="intro"
            offset={0}
            className={styles.desktopMenuListItem}
            smooth={true}
            duration={600}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="sobre"
            offset={0}
            className={styles.desktopMenuListItem}
            smooth={true}
            duration={600}
            onClick={toggleMobileMenu}
          >
            Sobre
          </Link>
          <Link
            to="projetos"
            offset={0}
            className={styles.desktopMenuListItem}
            smooth={true}
            duration={600}
            onClick={toggleMobileMenu}
          >
            Projetos
          </Link>
          <Link
            to="contato"
            offset={0}
            smooth={true}
            duration={600}
            onClick={toggleMobileMenu}
          >
            <button className={styles.desktopMenuBtn}>
              <img src={contact} alt="" className={styles.desktopMenuImg} />
              Entre em Contato
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

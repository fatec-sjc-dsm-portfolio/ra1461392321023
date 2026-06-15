import React, { useState, useEffect } from "react";
import styles from "./contato.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contato = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contato" className={styles.contatoSection}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.contatoTitulo}>
          <span className={styles.sectionTag}>Contato</span>
          <h2>Entre em Contato</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.contatoContainer}>
          <div className={styles.contatoInfo}>
            <h3>Vamos Conversar</h3>
            <p>
              Meu nome é Pedro Martins de Oliveira e estou disponível para novas
              oportunidades de trabalho. Com experiência em programação,
              habilidades avançadas em inglês e intermediárias em alemão, além
              de um perfil colaborativo e de liderança, estou pronto para
              agregar valor à sua equipe.
            </p>

            <div className={styles.contatoDetails}>
              <div className={styles.contatoDetail}>
                <div className={styles.iconContainer}>
                  <FaEnvelope className={styles.contactIcon} />
                </div>
                <span>pedromartinsoliveira9@gmail.com</span>
              </div>

              <div className={styles.contatoDetail}>
                <div className={styles.iconContainer}>
                  <FaPhoneAlt className={styles.contactIcon} />
                </div>
                <span>+55 12 99758-2249</span>
              </div>

              <div className={styles.contatoDetail}>
                <div className={styles.iconContainer}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                </div>
                <span>São José dos Campos, SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "../../assets/arrow_icon.svg";
import pattern from "../../assets/pattern.svg";
import projetos_data from "../../assets/projetos_data";
import styles from "./projetos.module.css";
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Projetos = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (projeto) => {
    setSelectedProject(projeto);
    setShow(true);
  };

  const handleMostrarMaisClick = () => {
    window.open("https://github.com/OliveiraPedro09", "_blank");
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) =>
      prevCount + 2 <= projetos_data.length ? prevCount + 2 : prevCount
    );
  };

  return (
    <section id="projetos" className={styles.projetosSection}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.projetosTitulo}>
          <span className={styles.sectionTag}>Portfolio</span>
          <h2>Meus Projetos</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.projetosContainer}>
          {projetos_data.slice(0, visibleProjects).map((projeto, index) => (
            <div
              key={index}
              className={`${styles.projetoCard} ${
                isVisible ? styles["appear-delay-" + index] : ""
              }`}
            >
              <a
                href={projeto.link || "#"}
                onClick={(e) => {
                  e.preventDefault();
                  handleShow(projeto);
                }}
              >
                <div className={styles.cardImageContainer}>
                  <img
                    className={styles.imgs}
                    src={projeto.p_img}
                    alt={projeto.p_nome}
                  />
                </div>
                <div className={styles.projetoOverlay}>
                  <h3>{projeto.p_nome}</h3>
                  <p>
                    {projeto.shortDescription ||
                      "Clique para ver mais detalhes"}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {visibleProjects < projetos_data.length && (
          <button className={styles.loadMoreBtn} onClick={loadMoreProjects}>
            Carregar Mais Projetos
          </button>
        )}

        <div className={styles.projetosMais} onClick={handleMostrarMaisClick}>
          <FaGithub className={styles.githubIcon} />
          <span>Meu GitHub</span>
          <div className={styles.arrowIcon}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <Link
        to="contato"
        smooth={true}
        duration={600}
        className={styles.scrollIndicator}
      >
        <FaChevronDown className={styles.scrollIcon} />
        <span className={styles.scrollText}>Rolar para baixo</span>
      </Link>

      {selectedProject && (
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName={styles.modalDialog}
        >
          <Modal.Header closeButton className={styles.modalHeader}>
            <Modal.Title>{selectedProject.p_nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            <div className={styles.modalContent}>
              <img
                src={selectedProject.p_img}
                alt={selectedProject.p_nome}
                className={styles.modalImg}
              />

              <div className={styles.modalDescription}>
                <h4>Descrição</h4>
                <p>{selectedProject.descricao}</p>

                {selectedProject.contribuicao && (
                  <div className={styles.contribuicaoSection}>
                    <h4>Minha Contribuição</h4>
                    <p>{selectedProject.contribuicao}</p>
                  </div>
                )}

                <div className={styles.skillsContainer}>
                  {selectedProject.soft_skills && (
                    <div className={styles.skillsBox}>
                      <h5>Soft Skills</h5>
                      <p>{selectedProject.soft_skills}</p>
                    </div>
                  )}

                  {selectedProject.hard_skills && (
                    <div className={styles.skillsBox}>
                      <h5>Hard Skills</h5>
                      <p>{selectedProject.hard_skills}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modalFooter}>
            <Button
              variant="outline-secondary"
              onClick={handleClose}
              className={styles.modalCloseBtn}
            >
              Fechar
            </Button>
            <Button
              className={styles.modalViewBtn}
              href={selectedProject.link}
              target="_blank"
              disabled={!selectedProject.link}
            >
              Ver Projeto
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projetos;

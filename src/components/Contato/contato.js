import React, { useState, useEffect } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./contato.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contato = () => {
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    show: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timer;
    if (cooldown && cooldownTime > 0) {
      timer = setTimeout(() => {
        setCooldownTime((prev) => prev - 1);
      }, 1000);
    } else if (cooldownTime === 0 && cooldown) {
      setCooldown(false);
    }

    return () => clearTimeout(timer);
  }, [cooldown, cooldownTime]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (cooldown) {
      setFormStatus({
        message: `Aguarde ${cooldownTime} segundos antes de enviar outra mensagem`,
        type: "warning",
        show: true,
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({
      message: "Enviando mensagem...",
      type: "sending",
      show: true,
    });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "73afd969-84b3-42fe-ab81-fd64e8885c31"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mensagem", formData.mensagem);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: "Mensagem enviada com sucesso!",
          type: "success",
          show: true,
        });

        setFormData({
          name: "",
          email: "",
          mensagem: "",
        });

        setCooldown(true);
        setCooldownTime(60);

        setTimeout(() => {
          setFormStatus((prev) => ({ ...prev, show: false }));
        }, 5000);
      } else {
        throw new Error(data.message || "Erro ao enviar mensagem");
      }
    } catch (error) {
      setFormStatus({
        message:
          error.message ||
          "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        type: "error",
        show: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className={styles.contatoFormContainer}>
            {formStatus.show && (
              <Alert
                variant={
                  formStatus.type === "success"
                    ? "success"
                    : formStatus.type === "error"
                    ? "danger"
                    : formStatus.type === "warning"
                    ? "warning"
                    : "info"
                }
                className={styles.formAlert}
              >
                {formStatus.message}
              </Alert>
            )}

            <form onSubmit={onSubmit} className={styles.contatoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.formControl} ${
                    errors.name ? styles.isInvalid : ""
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <div className={styles.invalidFeedback}>{errors.name}</div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.formControl} ${
                    errors.email ? styles.isInvalid : ""
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <div className={styles.invalidFeedback}>{errors.email}</div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className={`${styles.formControl} ${
                    errors.mensagem ? styles.isInvalid : ""
                  }`}
                  placeholder="Digite sua mensagem aqui..."
                />
                {errors.mensagem && (
                  <div className={styles.invalidFeedback}>
                    {errors.mensagem}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || cooldown}
              >
                {isSubmitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Enviando...
                  </>
                ) : cooldown ? (
                  `Aguarde (${cooldownTime}s)`
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

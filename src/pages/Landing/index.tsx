import React from "react";
import Header from "../../components/Header";
import "./style.css";
import landingImg from "../../assets/images/vector.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="flex left-landing-center">
          <h1 className="titulo">Sua plataforma para gerenciar tarefas.</h1>
          <h3 className="subtitulo">
            Ajudamos pessoas a controlar suas tarefas online.
          </h3>

          <Link to="/cadastrar-tarefas">
            <div className="botao flex">
              <div className="botao-left flex">
                <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
              </div>
              <div className="botao-right flex">
                <span className="botao-right-text">Cadastre uma nova tarefa</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="vectorLanding">
        <img
          src={landingImg}
          alt="Plataforma de tarefas"
          className="vectorLandingImg"
        />
      </div>
    </>
  );
};

export default Landing;

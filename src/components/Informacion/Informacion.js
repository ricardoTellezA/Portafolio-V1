import React from "react";
import { Container } from "semantic-ui-react";
import { Animated } from "react-animated-css";
import git from "../../assets/image/icons/Git.png";
import linkedin from "../../assets/image/icons/Linkedin.png";
import wath from "../../assets/image/whats.png";
import yo from "../../assets/image/yo2.png";
import About from "../About";
import Menu from "../Menu";

import "./Informacion.scss";
const Informacion = () => {
  return (
    <>
      <Animated
        animationIn="animate__backInRight"
        animationOut="animate__backOutLeft"
        isVisible={true}
      >
        <Container className="informacion">
          <div className="informacion__container">
            <div className="informacion__imagen">
              <img src={yo} alt="yo" className="yo" />
            </div>

            <div className="texto">
              <h1 className="informacion__texto--titulo">
                Hola, soy{" "}
                <span className="informacion__texto--nombre">
                  Ricardo Téllez Álvarez
                </span>
              </h1>
              <p className="puesto-trabajo">Desarrollador Front-end</p>

              <div className="redes-sociales">
                <a href="">
                  <img src={git} alt="git" className="git" />
                </a>

                <a href="" className="link">
                  <img src={linkedin} alt="" />
                </a>
                <a href="" className="what">
                  <img src={wath} alt="" />
                </a>
              </div>
            </div>
            <Menu />
          </div>
        </Container>

        <About />
      </Animated>
    </>
  );
};

export default Informacion;

// <div className="infromacion__info">
//     <p>Nombre: </p>

// </div>
// </div>

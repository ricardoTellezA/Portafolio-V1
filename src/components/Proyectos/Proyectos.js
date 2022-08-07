import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import myProyects from "../../utils/myProyects";
import { Animated } from "react-animated-css";
import "./Proyectos.scss";

const ProyectosList = () => {
  return (
    <>
      <Animated
        animationIn="animate__backInRight"
        animationOut="animate__backOutLeft"
        isVisible={true}
      >
        <h1 className="title">Mis Proyectos</h1>
        <div className="container-proyects">
          {myProyects.map((proyect) => (
            <Card key={proyect.title}>
              <Image src={proyect.image} wrapped ui={false} size="medium" />
              <Card.Content>
                <Card.Header>{proyect.title}</Card.Header>
                <Card.Description>
                  {proyect.description}
                  <Tecnologias proyect={proyect.tecnologias} />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a target="_blank" href={proyect.url}>
                  <Icon name="paper plane" />
                  Ver Proyecto
                </a>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Animated>
    </>
  );
};

const Tecnologias = ({ proyect }) => {
  return (
    <ul>
      {proyect.map((tecnologia) => (
        <li key={tecnologia}>{tecnologia}</li>
      ))}
    </ul>
  );
};

export default ProyectosList;

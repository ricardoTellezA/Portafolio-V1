import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={"/skills"} className="skills">Skills</Link>
      <Link to={"/proyectos"} className="proyectos">Proyectos</Link>
    </div>
  );
};

export default Menu;

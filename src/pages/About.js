import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Informacion from "../components/Informacion";
import Text from "../components/Text/Text";
const About = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setText(false);
    }, 8000);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Header />

      {text ? <Text /> : <Informacion />}
    </div>
  );
};

export default About;

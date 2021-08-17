import React from "react";
import web_development_img from "../../assets/images/web-development.png";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "1060px",
      width: "100%",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      background: "#F2F7FA",
    },
    img: {
      maxWidth: "1060px",
      width: "100%",
      height: "auto",
    },
    h1: {
      margin: "0",
      paddingLeft: "20px",
      paddingTop: "20px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "26px",
      color: "#172A3A",
    },
    p: {
      padding: "0px 20px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "150%",
      textAlign: "left",
      color: "#000000",
    },
  })
);

const Webdesign: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>Desenvolvimento Web</h1>
      <img className={classes.img} src={web_development_img} alt="" />
      <p className={classes.p}>
      Nossos desenvolvedores altamente qualificados utilizam as mais modernas tecnologias do mercado para desenvolvimento de sites customizados para o seu negócio. Solicite um orçamento sem compromisso.
      </p>
    </div>
  );
};

export default Webdesign;

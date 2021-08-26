import React from "react";
import Consultoria from "../Cards/Consultoria";
import BoasPraticas from "../Cards/BoasPraticas";
import Conscientizacao from "../Cards/Conscientizacao";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    services: {
      display: "flex",
      maxWidth: "1060px",
      paddingTop: "20px",
      // paddingBottom: "20px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      backgroundColor: "#F2F7FA",
      justifyContent: "space-around",
    },
    intro: {
      maxWidth: "1060px",
      paddingTop: "20px",
      backgroundColor: "#F2F7FA",
    },
    bottom: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: "1060px",
      paddingTop: "20px",
      backgroundColor: "#F2F7FA",
      paddingBottom: 30,
      paddingLeft: 30,
    },
    buttom: {
      margin: 10,
    },
  })
);

const ConsultoriaLGPD: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.intro}>
        <Typography variant="body1">
          A Likkn possui serviço especializado de consultoria para adequação à
          LGPD. Veja abaixo os tópicos abordados. Solicite um orçamento para sua
          empresa.
        </Typography>
      </Container>
      <Container className={classes.services}>
        <Consultoria />
        <BoasPraticas />
        <Conscientizacao />
      </Container>
      <Container className={classes.bottom}>
        <Button
          className={classes.buttom}
          disableElevation
          variant="outlined"
          size="large"
          color="primary"
          startIcon={<ShoppingCartIcon />}
        >
          Solicite um orçamento
        </Button>
        <Button
          className={classes.buttom}
          disableElevation
          variant="outlined"
          size="large"
          color="primary"
          startIcon={<DescriptionIcon />}
        >
          Conheça a LGPD
        </Button>
      </Container>
    </>
  );
};

export default ConsultoriaLGPD;
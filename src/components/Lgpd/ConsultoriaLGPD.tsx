import React from "react";
import Consultoria from "../Cards/Consultoria";
import BoasPraticas from "../Cards/BoasPraticas";
import Conscientizacao from "../Cards/Conscientizacao";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    services: {
      display: "flex",
      // paddingBottom: "20px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-around",
      padding: '0px',
    },
    title: {
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    background: {
      background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
    },
    container: {
      maxWidth: '60%',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {
      flexGrow: 1,
    },
    container_title: {
      maxWidth: '60%',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
    },
    padding: {
      padding: '0px',
    },
    text: {
      fontSize: '100%',
      textAlign: 'left',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
  })
);

const ConsultoriaLGPD: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.root}>
          <br /><br />
          <Typography className={classes.title} paragraph={true}> Consultoria LGPD </Typography>
          <br />
          <Typography className={classes.text}>
            Nos possuimos um serviço especializado de consultoria para adequação à
            LGPD, Com profissionais de ponto o realizando. Veja abaixo os tópicos abordados. Solicite um orçamento para sua
            empresa.
          </Typography>
          <br /><br /><br />
          <Grid container spacing={10} className={classes.img}>
            <Container className={classes.services}>
              <Consultoria />
              <BoasPraticas />
              <Conscientizacao />
            </Container>
          </Grid>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaLGPD;
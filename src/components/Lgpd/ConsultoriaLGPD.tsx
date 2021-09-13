import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from '@material-ui/core/Grid';
import consultoria from "../../assets/images/consultoria.svg"
import conscientizacao from "../../assets/images/conscientizacao.svg"
import boaspraticas from "../../assets/images/boaspraticas.svg"
import { Card, CardContent } from "@material-ui/core";


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
    rootBase: {
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
    textLeft: {
      fontSize: '100%',
      textAlign: 'left',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },

    root: {
      maxWidth: 320,
      marginBottom: 15,
    },
    cardContent: {
      minWidth: 270,
      minHeight: 310,
    },
    image: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 15,
    },
    header: {
      height: 65,
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '10px',
    },

    text: {
      fontSize: '100%',
      textAlign: 'center',
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
        <div className={classes.rootBase}>
          <br /><br />
          <Typography className={classes.title} paragraph={true}> Consultoria LGPD </Typography>
          <br />
          <Typography className={classes.textLeft}>
            Nos possuimos um serviço especializado de consultoria para adequação à
            LGPD, Com profissionais de ponto o realizando. Veja abaixo os tópicos abordados. Solicite um orçamento para sua
            empresa.
          </Typography>
          <br /><br /><br />
          <Grid container spacing={10} className={classes.img}>
            <Container className={classes.services}>

              {/*consultoria */}
              <Card className={classes.root}>
                <Typography className={classes.header} paragraph={true}> Consultoria para proteção de dados </Typography>
                <div className={classes.image}>
                  <img src={consultoria} alt="consultoria" />
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2" align="center" className={classes.text}>
                    Entender e documentar todos os processos da empresa com a finalidade de identificar quais informações são coletadas, onde são processadas e como são classificadas, afim de inventariá-las de acordo com as leis vigentes e de Segurança da Informação. Como resultado, identificaremos os sistemas que necessitam ser adequados e quais processos precisam ser criados para estar em conformidade com a LGPD.
                  </Typography>
                </CardContent>
              </Card>
              {/*boas praticas */}

              <Card className={classes.root}>
                <Typography className={classes.header} paragraph={true}> Boas Práticas e Governança </Typography>
                <div className={classes.image}>
                  <img src={boaspraticas} alt="boaspraticas" />
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2" align="center" className={classes.text}>
                    Revisão e elaboração de templates de políticas, normas e procedimentos relativos à privacidade e a proteção de dados pessoais.
                  </Typography>
                </CardContent>
              </Card>

              {/*concientizacao */}
              <Card className={classes.root}>
                <Typography className={classes.header} paragraph={true}> Conscientização </Typography>

                <div className={classes.image}>
                  <img src={conscientizacao} alt="conscientizacao" />
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2" align="center" className={classes.text}>
                    Treinamento e conscientização dos colaboradores sobre privacidade e proteção de dados.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaLGPD;
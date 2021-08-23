import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import experience from "../../assets/images/Experience.png"
import sobre from "../../assets/images/sobre.png"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      maxWidth: '60%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
    },

    title: {
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    titlev2: {
      fontSize: '120%',
      color: '#B0D236',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '100%',
      textAlign: 'justify',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    root2: {
      minWidth: 270,
    },
    bold: {
      fontSize: '130%',
      fontWeight: 'bold',
      fontFamily: 'montserrat',
    },
    background:{
      background: '#F2F7FA',
    },
    img:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }),
);

const AboutOurBusiness: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <br/>
      <br/>
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs>
              <div className={classes.root2}>
                <Typography className={classes.title} paragraph={true}> Sobre o nosso negócio </Typography>
                <Typography className={classes.titlev2} paragraph={true}> Comprometimento com a excelência </Typography>
                <Typography className={classes.text} paragraph={true}> A <text className={classes.bold}>Likkn</text> é uma startup de tecnologia voltada à disponibilização de soluções para micro, pequenas e médias empresas. </Typography>
                <Typography className={classes.text} paragraph={true}> Temos em nosso DNA décadas de experiência implementando sistemas para grandes industrias. </Typography>
                <Typography className={classes.text} paragraph={true}> Aplicamos o que há de mais moderno no atendimento às necessidades dos nossos clientes. </Typography>
              </div >
            </Grid>
            <Grid item xs className={classes.img}>
              <div className={classes.root2}>
                  <img src={experience} width="100%" height="100%" alt="experiencia" />
              </div >
            </Grid>
          </Grid>

          <Grid container spacing={10}>
            <Grid item xs className={classes.img}>
              <div className={classes.root2}>
                <img src={sobre} width="100%" height="100%" alt="sobre" />
              </div >
            </Grid>
            <Grid item xs>
              <div className={classes.root2}>
                <Typography className={classes.text} paragraph={true}> Os produtos e soluções likkn foram selecionados e desenvolvidos com o propósito de facilitar a informatização de negócios, além de otimizar processos e propor soluções em empresas que já tenham iniciado seu processo de informatização.</Typography>
                <Typography className={classes.text} paragraph={true}> Acreditamos que a tecnologia é o motor da economia. Computadores tomaram conta do nosso dia-a-dia, não fazemos nada sem interagirmos com algum programa de computador. </Typography>
                <Typography className={classes.text} > Também acreditamos que o acesso à tecnologia não é democrático para empresas: as melhores soluções são caras, seja a implementação e/ou manutenção, tornando impraticável para pequenos e médios empreendedores colherem todos os benefícios que a tecnologia tem a oferecer. </Typography>
              </div >
            </Grid>
          </Grid>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default AboutOurBusiness;
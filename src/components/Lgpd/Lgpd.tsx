import React from "react";
import IntroCard from '../Cards/IntroCard';
import FundamentosCard from '../Cards/FundamentosCard'
import ConceitosCard from '../Cards/ConceitosCard'
import PrincipiosCard from '../Cards/PrincipiosCard'
import BasesLegais from '../Cards/BasesLegais'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    itens: {
      display: "flex",
      maxWidth: "1060px",
      paddingTop: "20px",
      // paddingBottom: "20px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
    },
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
      background: ' rgba(216,222,228,1)',
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
      alignItems: 'center'
    },
    root: {
      flexGrow: 1,
    },
  })
);

const Lgpd: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.root}>
          <br /><br />
          <Typography className={classes.title} paragraph={true}> Sobre a LGPD </Typography>
          <br /><br />
          <Grid container spacing={10} className={classes.img}>
            <Container className={classes.services}>
              <IntroCard />
              <FundamentosCard />
              <ConceitosCard />
              <PrincipiosCard />
              <BasesLegais />
            </Container>
          </Grid>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default Lgpd;

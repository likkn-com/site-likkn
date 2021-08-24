import React from "react";
import IntroCard from '../Cards/IntroCard';
import FundamentosCard from '../Cards/FundamentosCard'
import ConceitosCard from '../Cards/ConceitosCard'
import PrincipiosCard from '../Cards/PrincipiosCard'
import BasesLegais from '../Cards/BasesLegais'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    container: {
      display: "flex",
      maxWidth: "1060px",
      paddingTop: "20px",
      // paddingBottom: "20px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      backgroundColor: "#F2F7FA",
      justifyContent: "space-evenly",
    },
  })
);

const Lgpd: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <IntroCard />
      <FundamentosCard />
      <ConceitosCard />
      <PrincipiosCard />
      <BasesLegais />
    </Container>
  );
};

export default Lgpd;

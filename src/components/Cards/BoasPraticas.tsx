import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import boaspraticas from "../../assets/images/boaspraticas.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 320,
      minHeight: 530,
      marginBottom: 15,
    },
    cardContent: {
      minWidth: 270,
    },
    image: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 15,
    },
    header: {
      height: 65,
    },
  })
);

const BoasPraticas: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} titleTypographyProps={{ variant: "h5", align: "center"}} title="Boas Práticas e Governança" />
      <div className={classes.image}>
        <img src={boaspraticas} alt="" />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" align="center">
        Revisão e elaboração de templates de políticas, normas e procedimentos relativos à privacidade e a proteção de dados pessoais.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoasPraticas;

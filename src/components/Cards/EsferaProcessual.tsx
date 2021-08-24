import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import esferaprocessual from "../../assets/images/esferaprocessual.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 152,
      minWidth: 152,
      minHeight: 172,
      marginBottom: 5,
      background: "#F6F6F6",
    },
    media: {
      height: 60,
      paddingTop: "56.25%", // 16:9
    },
    cardIntroActions: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 30,
      justifyContent: "space-around",
      // marginTop: 30,
    },
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      marginLeft: "0 !important",
    },
    cardContent: {
      paddingBottom: 0,
    },
    cardTitle: {
      fontSize: 8,
    },
    image: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 15,
    },
    header: {
      height: 50,
      padding: 15,
    },
  })
);

const EsferaProcessual: React.FC = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader className={classes.header}
        titleTypographyProps={{ variant: "body2", align: "center" }}
        title="Exercício Regular na Esfera Processual"
      />
      <div className={classes.image}>
        <img src={esferaprocessual} alt="" />
      </div>
    </Card>
  );
};

export default EsferaProcessual;

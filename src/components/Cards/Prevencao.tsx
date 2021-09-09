import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import prevencao from "../../assets/images/prevencao.svg";
import { Typography } from "@material-ui/core";
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
      fontFamily: 'montserrat',
      fontWeight: 'bold',
      textAlign: "center",
    },
  })
);

const Prevencao: React.FC = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <Typography className={classes.header} > Prevenção </Typography>
      <div className={classes.image}>
        <img src={prevencao} alt="" />
      </div>
    </Card>
  );
};

export default Prevencao;

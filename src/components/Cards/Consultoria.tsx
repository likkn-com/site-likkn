import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import consultoria from "../../assets/images/consultoria.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const Consultoria: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography className={classes.header} paragraph={true}> Consultoria para proteção de dados </Typography>
      <div className={classes.image}>
        <img src={consultoria} alt="" />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" align="center" className={classes.text}>
        Entender e documentar todos os processos da empresa com a finalidade de identificar quais informações são coletadas, onde são processadas e como são classificadas, afim de inventariá-las de acordo com as leis vigentes e de Segurança da Informação. Como resultado, identificaremos os sistemas que necessitam ser adequados e quais processos precisam ser criados para estar em conformidade com a LGPD.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Consultoria;

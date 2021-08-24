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
      minWidth: 320,
      minHeight: 530,
      marginBottom: 15,
    },
    media: {
      height: 200,
      minHeight: 50,
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
    image: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 15,
    },
    header: {
      height: 65,
      padding: 15,
    },
  })
);

const Consultoria: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} titleTypographyProps={{ variant: "h5", align: "center"}} title="Consultoria para proteção de dados" />
      <div className={classes.image}>
        <img src={consultoria} alt="" />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" align="center">
        Entender e documentar todos os processos da empresa com a finalidade de identificar quais informações são coletadas, onde são processadas e como são classificadas, afim de inventariá-las de acordo com as leis vigentes e de Segurança da Informação. Como resultado, identificaremos os sistemas que necessitam ser adequados e quais processos precisam ser criados para estar em conformidade com a LGPD.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Consultoria;

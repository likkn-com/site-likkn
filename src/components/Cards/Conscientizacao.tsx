import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import conscientizacao from "../../assets/images/conscientizacao.svg"

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

const Conscientizacao: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} titleTypographyProps={{ variant: "h5", align: "center"}} title="Conscientização" />
      <div className={classes.image}>
        <img src={conscientizacao} alt="" />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" align="center">
        Revisão e elaboração de templates de políticas, normas e procedimentos relativos à privacidade e a proteção de dados pessoais.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Conscientizacao;

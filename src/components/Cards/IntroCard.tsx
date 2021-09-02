import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import lgpdIntroImg from "../../assets/images/lgpd-intro.png";
import DescriptionIcon from "@material-ui/icons/Description";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 345,
      marginBottom: 25,
    },
    media: {
      height: 0,
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
  })
);

const IntroCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader titleTypographyProps={{ variant: "h5" }} title="Introdução" />
      <CardMedia
        className={classes.media}
        image={lgpdIntroImg}
        title="Introdução"
      />
      <CardContent className={classes.cardContent}>
        <Typography paragraph>
          LGPD é a abreviação da Lei 13.709/18 (Lei Geral de Proteção de Dados)
          que foi aprovada em 2018 no governo Michel Temer. Ela dispõe sobre o
          tratamento de dados pessoais, inclusive nos meios digitais, por pessoa
          natural ou por pessoa jurídica de direito público ou privado, e tem
          como objetivo proteger os direitos fundamentais de liberdade,
          privacidade e o livre desenvolvimento da pessoa natural.
        </Typography>
      </CardContent>
      {/*
      <CardActions className={classes.cardIntroActions}>
          <Button
            disableElevation
            variant="outlined"
            size="small"
            color="primary"
            startIcon={<DescriptionIcon />}
          >
            Acesse a LGPD
          </Button>
          <Button
            className={classes.button}
            disableElevation
            variant="outlined"
            size="small"
            color="primary"
            startIcon={<DirectionsIcon />}
          >
            Nosso Serviço
          </Button>
      </CardActions>
      
      */}
    </Card>
  );
};

export default IntroCard;

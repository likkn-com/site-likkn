import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import principaisConceitosImg from "../../assets/images/lgpd-conceitos.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 270,
      minHeight: 670,
      marginBottom: 25,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      // marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    margin: {
      margin: theme.spacing(1),
    },
    visible: {
      display: "flex",
      paddingTop: 0,
      padding: 16,
      alignItems: "center",
      justifyContent: "right",
      // display: "block",
      // marginLeft: "275px",
    },
    visible2: {
      display: "flex",
      paddingBottom: 16,
      // padding: 16,
      alignItems: "center",
      justifyContent: "right",
      // display: "block",
      // marginLeft: "275px",
    },
    invisible: {
      display: "none",
    },
    cardContentExpanded: {
      paddingTop: 0,
      paddingBottom: "0 !important",
    },
    readmore: {
      marginRight: 10,
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    cardContent: {
      paddingTop: 16,
      paddingBottom: 0,
      paddingRight: 16,
      paddingLeft: 16,
    },
    subtitleTypography: {
      color: "#1F9BD7",
      fontWeight: "bold",
      fontFamily: 'montserrat',
    },
    header: {
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
      textAlign: 'left',
      padding: '10px',
    },
    text: {
      fontSize: '100%',
      textAlign: 'left',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
  })
);

const ConceitosCard: React.FC = () => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setVisible(!visible);
  };

  return (
    <Card className={classes.root}>
       <Typography className={classes.header} > Principais Conceitos </Typography>
       <CardMedia
          className={classes.media}
          image={principaisConceitosImg}
          title="Principais Conceitos"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.subtitleTypography} variant="subtitle1" color="textPrimary" component="p">
            Dados Pessoais
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            informação relacionada a pessoa natural que permita identificar ou
            tornar uma pessoa identificável;
          </Typography>
          <Typography className={classes.subtitleTypography} variant="subtitle1" color="textPrimary" component="p">
            Dado Pessoal Sensível
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural;
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={clsx(classes.visible, {
              [classes.invisible]: visible,
            })}>
          <Typography className={classes.readmore}>
            Leia mais
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.cardContentExpanded}>
          <Typography className={classes.subtitleTypography} variant="subtitle1" color="textPrimary" component="p">
            Tratamento
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração;
          </Typography>
          <Typography className={classes.subtitleTypography} variant="subtitle1" color="textPrimary" component="p">
            Dado Anonimizado
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento;
          </Typography>
          <CardActions disableSpacing className={classes.visible2}
            >
          <Typography className={classes.readmore}>
            Reduzir
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
          </CardContent>
        </Collapse>
      </Card>
  );
}

export default ConceitosCard;
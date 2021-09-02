import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Finalidade from "./Finalidade";
import Qualidade from "./Qualidade";
import Adequacao from "./Adequacao";
import Necessidade from "./Necessidade";
import LivreAcesso from "./LivreAcesso";
import Transparencia from "./Transparencia";
import Seguranca from "./Seguranca";
import Prevencao from "./Prevencao";
import NaoDiscriminacao from "./NaoDiscriminacao";
import Responsabilizacao from "./Responsabilizacao";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 270,
      marginBottom: 25,
      minHeight: 670,
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
    },
    invisible: {
      display: "none",
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
    readmore: {
      marginRight: 10,
    },
    cardContentExpanded: {
      paddingTop: 0,
      paddingBottom: "0 !important",
    },
    cardcontent: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 0,
      paddingBottom: 0,
    },
  })
);

const PrincipiosCard: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setVisible(!visible);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Princípios" />
      <CardContent className={classes.cardcontent}>
      <Finalidade />
      <Qualidade />
      <Adequacao />
      <Necessidade />
      <LivreAcesso />
      <Transparencia />
      {/* <LegitimoInteresse />
      <Contrato />
      <ObrigacaoLegal /> */}
      </CardContent>
      <CardActions
        disableSpacing
        className={clsx(classes.visible, {
          [classes.invisible]: visible,
        })}
      >
        <Typography className={classes.readmore}>Leia mais</Typography>
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
      <CardContent className={classes.cardcontent + " " + classes.cardContentExpanded}>
      
      <Seguranca />
      <Prevencao />
      <NaoDiscriminacao />
      <Responsabilizacao />
      </CardContent>
        <CardActions disableSpacing className={classes.visible2}>
          <Typography className={classes.readmore}>Reduzir</Typography>
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
      </Collapse>
    </Card>
  );
};

export default PrincipiosCard;

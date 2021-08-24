import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import principiosImg1 from "../../assets/images/lgpd-principios-1.png";
import principiosImg2 from "../../assets/images/lgpd-principios-2.png";


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
    midiaPrincipios1: {
      height: "270px",
      backgroundSize: "auto",
      backgroundPosition: "top",
    },
    midiaPrincipios2: {
      height: "510px",
      backgroundSize: "auto",
      backgroundPosition: "top",
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
      alignItems: "center",
      justifyContent: "right",
    },
    readmore: {
      marginRight: 10,
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
      <CardMedia
        className={classes.media + " " + classes.midiaPrincipios1}
        image={principiosImg1}
        title="Principios"
      />
      <CardActions disableSpacing className={clsx(classes.visible, {
              [classes.invisible]: visible,
            })}
        >
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
        <CardMedia
          className={classes.media + " " + classes.midiaPrincipios2}
          image={principiosImg2}
          title="Principios"
        />
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

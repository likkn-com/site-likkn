import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import lgpdIntroImg from "../../assets/images/lgpd-intro.png";
import lgpdFundamentosImg from "../../assets/images/lgpd-fundamentos.png";
import principaisConceitosImg from "../../assets/images/lgpd-conceitos.png";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// import { Container } from './styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#67CBFF',
      main: '#1F9BD7',
      dark: '#006ca4',
      
    },
    secondary: {
      light: '#62BB6D',
      main: '#2F8A41',
      dark: '#005616',
    },
  },
});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: 20,
      background: "#F2F7FA",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    container: {
      display: "flex",
      maxWidth: "1060px",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    intro_card: {
      maxHeight: "562px",
    },
    cardIntroActions: {
      display: 'flex',
      paddingLeft: 15,
      // justifyContent: 'center',
      marginTop: 30,

    },
    list: {
      listStyleType: 'square',
      paddingLeft: '20px',
      marginTop: 0,
      marginBottom: 0,
      // fontSize: '0.875rem',
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em',
      color: 'rgba(0,0,0,0.87)',
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const Lgpd: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.root + " " + classes.intro_card}>
        <CardHeader
        title="Introdução" />
        <CardMedia
          className={classes.media}
          image={lgpdIntroImg}
          title="Introdução"
        />
        <CardContent>
        <Typography paragraph>
        LGPD é a abreviação da Lei 13.709/18 (Lei Geral de Proteção de
            Dados) que foi aprovada em 2018 no governo Michel Temer. Ela dispõe
            sobre o tratamento de dados pessoais, inclusive nos meios digitais,
            por pessoa natural ou por pessoa jurídica de direito público ou
            privado, e tem como objetivo proteger os direitos fundamentais de
            liberdade, privacidade e o livre desenvolvimento da pessoa natural.
            </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            LGPD é a abreviação da Lei 13.709/18 (Lei Geral de Proteção de
            Dados) que foi aprovada em 2018 no governo Michel Temer. Ela dispõe
            sobre o tratamento de dados pessoais, inclusive nos meios digitais,
            por pessoa natural ou por pessoa jurídica de direito público ou
            privado, e tem como objetivo proteger os direitos fundamentais de
            liberdade, privacidade e o livre desenvolvimento da pessoa natural.
          </Typography> */}
        </CardContent>
        <CardActions className={classes.cardIntroActions}>
          <ThemeProvider theme={theme}>
        <Button variant="contained" size="small" color="primary">
          Acesse a LGPD
        </Button>
        <Button variant="contained" size="small" color="primary">
          Nosso Serviço
        </Button>
        </ThemeProvider>
      </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardHeader title="Fundamentos" />
        <CardMedia
          className={classes.media}
          image={lgpdFundamentosImg}
          title="Fundamentos"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <ul className={classes.list}>
              <li>Respeito à privacidade</li>
              <li>Autodeterminação informativa</li>
              <li>Liberdade de expressão, informação, comunicação e opinião</li>
              <li>Inviolabilidade da intimidade, da honra e da imagem</li>
              <li>Desenvolvimento econômico e tecnológico e a inovação</li>
              <li>
                Livre iniciativa, livre concorrência e defesa do consumidor
              </li>
              <li>
                Direitos humanos, o livre desenvolvimento da personalidade, a
                dignidade e o exercício da cidadania pelas pessoas naturais
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          title="Principais Conceitos"
        />
        <CardMedia
          className={classes.media}
          image={principaisConceitosImg}
          title="Principais Conceitos"
        />
        <CardContent>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Dados Pessoais
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          informação relacionada a pessoa natural que permita identificar ou tornar uma pessoa identificável.
          </Typography>
        </CardContent>
        
      </Card>
      <Card className={classes.root}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
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
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default Lgpd;

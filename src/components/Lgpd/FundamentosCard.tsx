import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import lgpdFundamentosImg from "../../assets/images/lgpd-fundamentos.png";

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
    margin: {
      margin: theme.spacing(1),
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
      marginTop: 0,
      marginBottom: 0,
    },
  })
);

const FundamentosCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
         <Typography className={classes.header} > Fundamentos </Typography>
        <CardMedia
          className={classes.media}
          image={lgpdFundamentosImg}
          title="Fundamentos"
        />
        <CardContent>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            <ul>
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
  );
}

export default FundamentosCard;
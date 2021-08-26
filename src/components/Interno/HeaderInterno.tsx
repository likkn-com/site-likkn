import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > *': {
        margin: 0,
        padding: 0,
      },
    },
    container: {
      maxWidth: '60%',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
    },
    text: {
      fontSize: '100%',
      textAlign: 'justify',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
  }),
);


const HeaderInterno: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <br /><br />
      <Typography className={classes.title} paragraph={true} >
        <Box >Sistema interno</Box>
      </Typography>
      <Typography className={classes.text} paragraph={true}>
        <Box>
          Nos desenvolvemos um sistema MDM(Master Data Management), focado em customização, segurança e escalabilidade. Trata-se de um sistema intuitivo que qualquer pessoa com noções minimas de informatica consiga usar e configurar, com ele as possibilidades são praticamente infinitas.
        </Box>
      </Typography>
      <br />
    </div>
  );
}

export default HeaderInterno;
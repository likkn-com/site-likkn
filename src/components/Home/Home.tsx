import React from 'react';
import Header from '../Header/Header';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: 0,
        padding: 0,
      },
    },
    teste: {
        color: 'red'
    },
  }),
);

const Home: React.FC = () => {
    const classes = useStyles();

  return (
   <div className={classes.root}>
        <Header titulo="HOME" />

        <div className={classes.teste}> AAAAAA </div>

        <Button variant="contained" color="primary"> Primary </Button>

      <Footer/>
      
    </div>
  );
}

export default Home;
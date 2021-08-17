import React from 'react';
import Header from '../Header/Header';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import Contacts from '../Contacts/Contacts';

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
        <Header page={1} />
        <Body/>
        <Contacts/>
        <Footer/>
      
    </div>
  );
}

export default Home;
import React from 'react';
import Header from '../Header/Header';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import AboutOurBusiness from './AboutOurBusiness';
import AboutOurValues from './AboutOurValues';
import Partners from './Patrners';

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
        <Contacts/>
        <Header page={1} />
        <AboutOurBusiness/>  
        <AboutOurValues />   
        <Partners/>   
        <Footer/>
      
    </div>
  );
}

export default Home;
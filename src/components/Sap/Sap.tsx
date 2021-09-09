import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Consultoria from './Consultoria';
import Partners from './Partners';
import Banner from './Banner';
import NewBanner from './NewBanner';
import Estimativas from './Estimativas';
import Content from './Content';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: 0,
        padding: 0,
      },
    },
  }),
);

const Sap: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Contacts/>
      <Header page={4} />
      <Content/>
      {/*
      <Consultoria/>
      <Estimativas/>
      */}
      {/*<Banner/>*/}
      <NewBanner/>
      <Partners/>
      <Footer />
    </div>
  );
}

export default Sap;
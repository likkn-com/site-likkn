import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Content from '../Sap/Content';
import Partners from './Partners';
import Banner from './Banner';

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
      <Banner/>
      <Content/>
      <Partners/>
      <Footer />
    </div>
  );
}

export default Sap;
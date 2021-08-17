import React from 'react';
import Header from '../Header/Header';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
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
        <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Home;
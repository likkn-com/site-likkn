import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        background: '#0271b1',
        width: '100%',
        height: '100%',
        display: 'flex',
      '& > *': {
        margin: 0,
        padding: 0,
        border: 0
      },
    },
    content: {
        background: '#F2F7FA',
        width: '80%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
    },
  }),
);

const Body = () => {
    const classes = useStyles();
  return (
      <div className={classes.root}>
          <div className={classes.content}>
            <h1>corpo</h1>
          </div>
      </div>
  );
}

export default Body;
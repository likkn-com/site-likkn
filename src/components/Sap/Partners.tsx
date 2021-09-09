import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import parceiros_epi from '../../assets/images/parceiros_epi.png'
import parceiros_nexen from '../../assets/images/parceiros_nexen.png'
import parceiros_cs from '../../assets/images/parceiros_cs.png'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxWidth: '60%',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
        },
        title: {
            fontSize: '150%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        root: {
            flexGrow: 1,
        },
        root2: {
            minWidth: 222,
        },

        background: {
            background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
        },
    }),
);

const Partners: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <br /><br /><br />
                <div className={classes.root}>
                        <Grid item xs={12}>
                            <Typography className={classes.title} paragraph={true} >
                                <Box >Parceiros</Box>
                            </Typography>

                        </Grid>
                        <Grid container spacing={10}>
                            <Grid item xs>
                                <div className={classes.root2}>
                                    <img src={parceiros_epi} width="100%" height="100%" alt="epi" />
                                </div>
                            </Grid>

                            <Grid item xs>
                                <div className={classes.root2}>
                                    <img src={parceiros_nexen} width="100%" height="100%" alt="nexen" />
                                </div>
                            </Grid>

                            <Grid item xs>
                                <div className={classes.root2}>
                                    <img src={parceiros_cs} width="100%" height="100%" alt="cscorp" />
                                </div>
                            </Grid>
                        </Grid>
                    </div >
                <br /><br /><br />
            </div>
        </div>
    );
}

export default Partners;

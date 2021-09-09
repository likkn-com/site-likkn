import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import especializado from '../../assets/images/especializadoN.png'
import desenvolvimento from '../../assets/images/desenvolvimentoN.png'
import agil from '../../assets/images/agilN.png'
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
            background: 'white',
        },

        text: {
            fontSize: '100%',
            color: 'black',
            textAlign: 'center',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
    }),
);

const NewBanner: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <br /><br /><br />
                <div className={classes.root}>
                    <Grid container spacing={10}>
                        <Grid item xs>
                            <div className={classes.root2}>
                                <img src={desenvolvimento} width="100%" height="100%" alt="dev" />
                                <Typography className={classes.text} paragraph={true} >
                                    <Box >Temos como diferencial o foco em desenvolvimento.</Box>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs>
                            <div className={classes.root2}>
                                <img src={agil} width="100%" height="100%" alt="agil" />
                                <Typography className={classes.text} paragraph={true} >
                                    <Box >Nosso processo é simplificado e ágil.</Box>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs>
                            <div className={classes.root2}>
                                <img src={especializado} width="100%" height="100%" alt="especializado" />
                                <Typography className={classes.text} paragraph={true} >
                                    <Box >Recursos especializados em aplicações SAP em diferentes módulos do sistema.</Box>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div >
                <br /><br /><br />
            </div>
        </div>
    );
}

export default NewBanner;

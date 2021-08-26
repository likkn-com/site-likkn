import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import parceiros_epi from '../../assets/images/parceiros_epi.png'
import parceiros_nexen from '../../assets/images/parceiros_nexen.png'
import parceiros_cs from '../../assets/images/parceiros_cs.png'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Process from './Process';

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
        text: {
            fontSize: '100%',
            textAlign: 'left',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },

        root: {
            flexGrow: 1,
        },


        root2: {
            minWidth: 200,
        },

        img: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
        },
        background: {
            background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
        },
    }),
);

const Content2: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <br /><br />
                <div className={classes.root}>

                    <Grid container spacing={10}>
                        <Grid item xs >
                            <div className={classes.root2}>
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Composição das estimativas</Box>
                                </Typography>
                                <Typography className={classes.text} paragraph={true}>
                                    - Recebimento da demanda.<br /><br />
                                    - Desenho da solução + documentação técnica.<br /><br />
                                    - Desenvolvimento.<br /><br />
                                    - Testes unitários + documentação de testes.
                                </Typography>

                                <Button onClick={handleClickOpen} variant="contained" color="primary">Conheca nossos processos</Button>

                                <Dialog open={open} onClose={handleClose} >
                                    <DialogContent>
                                        {/*<img src={processos} width="100%" height="100%" alt="processos" />*/}
                                        <Process/>
                                    </DialogContent>
                                </Dialog>
                            </div >
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>

                    <div className={classes.root2}>
                        <br /><br />
                        <Grid item xs={12}>
                            <Typography className={classes.title} paragraph={true} >
                                <Box >Parceiros</Box>
                            </Typography>

                        </Grid>
                        <Grid container spacing={3}>
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
                            </Grid></Grid>
                    </div >
                </div>
                <br />
            </div>
        </div>
    );
}

export default Content2;

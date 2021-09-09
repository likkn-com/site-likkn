import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Process from './Process';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';

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

        text2: {
            fontSize: '100%',
            textAlign: 'center',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        root: {
            flexGrow: 1,
            minWidth: 200,
        },
        img: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
        },
        button:{
            color: 'white',
            background: '#172A3A',
            '&:hover': {
                background: '#305675',
                color: '#f8efef',
              }
        },
    }),
);

const Estimativas: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <br/><br/>
                <Grid container spacing={10}>
                      <Grid item xs className={classes.img}>
                        <Grid container spacing={10}>
                            <Grid item xs >
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Composição das estimativas</Box>
                                </Typography>
                                <Typography className={classes.text} paragraph={true}>
                                    - Recebimento da demanda.<br /><br />
                                    - Desenho da solução + documentação técnica.<br /><br />
                                    - Desenvolvimento.<br /><br />
                                    - Testes unitários + documentação de testes.
                                </Typography>
                                <Button onClick={handleClickOpen} variant="contained" className={classes.button}>Conheca nossos processos</Button>
                                <Dialog open={open} onClose={handleClose} >
                                    <DialogContent>
                                        <Process />
                                    </DialogContent>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>
        </div>
    );
}

export default Estimativas;

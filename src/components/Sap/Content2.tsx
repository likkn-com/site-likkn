import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import parceiros from '../../assets/images/parceiro.png'
import processos from '../../assets/images/processo.png'
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
            alignItems: 'center'
        },
        background: {
            background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
        },
    }),
);

const Content2: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <br /><br />
                <div className={classes.root}>
                    <Grid container spacing={10}>
                        <Grid item xs className={classes.img}>
                            <div className={classes.root2}>
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Composição das estimativas</Box>
                                </Typography>
                                <Typography className={classes.text}>
                                    - Recebimento da demanda.<br /><br />
                                    - Desenho da solução + documentação técnica.<br /><br />
                                    - Desenvolvimento.<br /><br />
                                    - Testes unitários + documentação de testes.
                                </Typography>
                            </div >
                        </Grid>
                        <Grid item xs>

                            <div className={classes.root2}>
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Processo</Box>
                                </Typography>
                                <div className={classes.root2}>
                                    <img src={processos} width="100%" height="100%" alt="processos" />
                                </div >
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Grid container spacing={10}>

                        <Grid item xs>
                            <div className={classes.root2}>
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Parceiros</Box>
                                </Typography>
                                <div className={classes.root2}>
                                    <img src={parceiros} width="100%" height="100%" alt="parceiros" />
                                </div >
                            </div >
                        </Grid>

                        <Grid item xs className={classes.img}>
                            <div className={classes.root2}>
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Garantia</Box>
                                </Typography>
                                <Typography className={classes.text}>
                                    - Todos os desenvolvimentos tem garatia completa de 1 mês a contar da data de entrega.<br /><br />
                                    - Durante esse período, qualquer erro que seja coberto pela definição de escopo presente na documentação técnica será resolvido, sem custos.
                                </Typography>
                            </div >
                        </Grid>
                    </Grid>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Content2;

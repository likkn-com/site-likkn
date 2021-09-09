import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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

const Consultoria: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <br/><br/>
                <Grid container spacing={10}>
                    <Grid item xs className={classes.img}>
                        <Grid container spacing={10}>
                            <Grid item xs >
                                <Typography className={classes.title} paragraph={true} >
                                    <Box >Consultoria SAP</Box>
                                </Typography>
                                <Typography className={classes.text}>
                                    - Atendimento de demandas com preço fechado ou suporte (pacote mensal - baseline).<br /><br />
                                    - Foco na arquitetura e desenho da solução, garantindo a melhor utilização dos sistemas e ferramentas disponiveis.<br /><br />
                                    - Realização de sessões periódicas de status<br /><br />
                                    - Suporte proativo (para pacotes mensais)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>
        </div>
    );
}

export default Consultoria;

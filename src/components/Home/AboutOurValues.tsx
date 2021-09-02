import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import logov2 from "../../assets/images/logov2.png"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        background: {
            background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
        },
        media: {
            height: 140,
        },
        container: {
            maxWidth: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
        },
        root2: {
            minWidth: 270,
        },

        title: {
            fontSize: '150%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        titlev2: {
            fontSize: '120%',
            color: '#B0D236',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        text: {
            fontSize: '100%',
            textAlign: 'justify',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        img: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
);

const AboutOurValues: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>

            <br />
            <div className={classes.container}>
                <div className={classes.root}>
                    <br /><br /><br />
                    <Typography className={classes.title} paragraph={true}> Sobre os nossos Valores </Typography>
                    <br/><br/>
                    <Grid container spacing={5} className={classes.img}>
                        <Grid item xs>
                            <div className={classes.root2}>
                                <img src={logov2} width="80%" height="80%" alt="logov2" />
                            </div >
                        </Grid>
                        <Grid item xs>
                            <Typography className={classes.titlev2} paragraph={true}> Conectando pessoas através da tecnologia </Typography>
                            <Typography className={classes.text} paragraph={true}> * Nosso objetivo é tornar as tecnologias modernas de software acessíveis, com soluções de ponta e preços justos. </Typography>

                            <Typography className={classes.text} paragraph={true}> * Um de nossos principais valores é honestidade e transparência com nossos parceiros e clientes. </Typography>
                            <Typography className={classes.text} paragraph={true}> * Nós não fornecemos software; Nós fornecemos solução conforme as necessidades dos clientes. </Typography>
                            <Typography className={classes.text} paragraph={true}>* As necessidades de cada cliente são diferentes. Nosso principal trabalho é entendê-los para que possamos oferecer soluções customizadas a um preço acessível. </Typography>
                        </Grid>
                    </Grid>
                    <br /><br /><br />
                </div>
            </div>
            <br />
        </div>
    );
}

export default AboutOurValues;
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import web_development_img from "../../assets/images/web-development.png";
import { Grid, Paper } from "@material-ui/core";
import MemoryIcon from '@material-ui/icons/Memory';

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import StyleIcon from '@material-ui/icons/Style';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
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
    media: {
        height: 280,
    },
    background: {
        background: 'linear-gradient( 160deg, rgba(216,222,228,1), hsla(30, 50%, 95%, 80))',
    },
    title: {
        fontSize: '120%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
        color: "#1F9BD7",
    },
    titleP: {
        fontSize: '120%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },

    text: {
        textAlign: 'justify',
        fontSize: '100%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },

    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    cardLength: {
        maxWidth: '90%',
        alignItems: 'left',
        justifyContent: 'left',
        position: 'relative',
    },
    cardLengthMobile: {
        maxWidth: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
    }
});

const Content: React.FC = () => {
    const classes = useStyles();

    function mobileOrDesktop(width: number) {
        if (width > 780) {
            return (
                <div className={classes.container}>
                    <div className={classes.root}>
                        <br /><br />
                        <Typography className={classes.titleP} paragraph={true}> Web Designer </Typography>
                        <br />
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <img src={web_development_img} alt="web_development" width="60%" height="60%" />
                        </Grid>
                        <br />
                        <Card>
                            <Grid container>
                                <Grid item xs={4} className={classes.img}>
                                    <DeveloperBoardIcon style={{ fontSize: '500%' }} />
                                </Grid>
                                <Grid item xs={8} >
                                    <Paper square elevation={0} className={classes.cardLength}>
                                        <Typography className={classes.title}>Desenvolvimento:</Typography>
                                        <Typography className={classes.text}>Seja qual for o seu negócio, nós desenvolvemos o site. Utilizamos as mais modernas tecnologias do mercado para proporcionar a melhor experiência aos clientes e usuários.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card>
                            <Grid container>
                                <Grid item xs={4} className={classes.img}>
                                    <TouchAppIcon style={{ fontSize: '500%' }} />
                                </Grid>
                                <Grid item xs={8} >
                                    <Paper square elevation={0} className={classes.cardLength}>
                                        <Typography className={classes.title}>User Experience (UX):</Typography>
                                        <Typography className={classes.text}>Este termo é utilizado para medir toda a relação e experiência do usuário ao utilizar um produto, seja ele qual for. Nós desenvolvemos sites com as melhores experiências digitais para seu negócio através de criação de interfaces, conteúdos e interações.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card>
                            <Grid container>
                                <Grid item xs={4} className={classes.img}>
                                    <StyleIcon style={{ fontSize: '500%' }} />
                                </Grid>
                                <Grid item xs={8} >
                                    <Paper square elevation={0} className={classes.cardLength}>
                                        <Typography className={classes.title}>Do seu jeito:</Typography>
                                        <Typography className={classes.text}>Customizamos o site para o seu negócio. Com a sua participação em todas as etapas de desenvolvimento, garantimos que todas as expectativas sejam atendidas.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card>
                            <Grid container>
                                <Grid item xs={4} className={classes.img}>
                                    <ForwardIcon style={{ fontSize: '500%' }} />
                                </Grid>
                                <Grid item xs={8} >
                                    <Paper square elevation={0} className={classes.cardLength}>
                                        <Typography className={classes.title}>Simplificado:</Typography>
                                        <Typography className={classes.text}>Gerenciamos o domínio, servidores e todos os demais serviços para que você não perca tempo e mantenha o foco apenas em seus negócios.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Card>
                        <br /><br />
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes.container}>
                    <div className={classes.root}>
                        <br /><br />
                        <Typography className={classes.title} paragraph={true}> Sobre os nossos Valores </Typography>
                        <br />
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <img src={web_development_img} alt="web_development" width="100%" height="100%" />
                        </Grid>
                        <br />
                        <Card>
                            <Grid item xs className={classes.img}>
                                <DeveloperBoardIcon style={{ fontSize: '500%' }} />
                            </Grid>
                            <Grid item xs >
                                <Paper square elevation={0} className={classes.cardLengthMobile}>
                                    <Typography className={classes.title}>Desenvolvimento:</Typography>
                                    <Typography className={classes.text}>Seja qual for o seu negócio, nós desenvolvemos o site. Utilizamos as mais modernas tecnologias do mercado para proporcionar a melhor experiência aos clientes e usuários.</Typography>
                                </Paper>
                            </Grid>
                        </Card>
                        <br />
                        <Card>
                            <Grid item xs className={classes.img}>
                                <TouchAppIcon style={{ fontSize: '500%' }} />
                            </Grid>
                            <Grid item xs >
                                <Paper square elevation={0} className={classes.cardLengthMobile}>
                                    <Typography className={classes.title}>User Experience (UX):</Typography>
                                    <Typography className={classes.text}>Este termo é utilizado para medir toda a relação e experiência do usuário ao utilizar um produto, seja ele qual for. Nós desenvolvemos sites com as melhores experiências digitais para seu negócio através de criação de interfaces, conteúdos e interações.</Typography>
                                </Paper>
                            </Grid>
                        </Card>
                        <br />
                        <Card>
                            <Grid item xs className={classes.img}>
                                <StyleIcon style={{ fontSize: '500%' }} />
                            </Grid>
                            <Grid item xs >
                                <Paper square elevation={0} className={classes.cardLengthMobile}>
                                    <Typography className={classes.title}>Do seu jeito:</Typography>
                                    <Typography className={classes.text}>Customizamos o site para o seu negócio. Com a sua participação em todas as etapas de desenvolvimento, garantimos que todas as expectativas sejam atendidas.</Typography>
                                </Paper>
                            </Grid>
                        </Card>
                        <br />
                        <Card><Grid item xs className={classes.img}>
                            <ForwardIcon style={{ fontSize: '500%' }} />
                        </Grid>
                            <Grid item xs >
                                <Paper square elevation={0} className={classes.cardLengthMobile}>
                                    <Typography className={classes.title}>Simplificado:</Typography>
                                    <Typography className={classes.text}>Gerenciamos o domínio, servidores e todos os demais serviços para que você não perca tempo e mantenha o foco apenas em seus negócios.</Typography>
                                </Paper>
                            </Grid>
                        </Card>
                        <br /><br />
                    </div>
                </div>
            );
        }
    }


    return (
        <div className={classes.background}>
            {mobileOrDesktop(window.innerWidth)}
        </div>
    );
}

export default Content;
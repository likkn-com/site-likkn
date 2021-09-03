import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgContent from '../../assets/images/content.png'
import Typography from '@material-ui/core/Typography';
import {  Icon } from '@material-ui/core';


import SettingsIcon from '@material-ui/icons/Settings';
import UpdateIcon from '@material-ui/icons/Update';
import HttpsIcon from '@material-ui/icons/Https';
import PublicIcon from '@material-ui/icons/Public';
import MemoryIcon from '@material-ui/icons/Memory';
import ContactsIcon from '@material-ui/icons/Contacts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const useStyles = makeStyles({
    root: {
        '& > *': {
            margin: 0,
            padding: 0,
        },
    },
    container: {
        maxWidth: '60%',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
    },
    text: {
        textAlign: 'justify',
        fontSize: '100%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },
    root2: {
        minWidth: 270,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },
    root3: {
        minWidth: 100,
    },

    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: '150%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },
    title_text: {
        fontSize: '120%',
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    }

});


const Content: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <br />
                <Typography className={classes.title} paragraph >Vantagens</Typography>
                <br />
                <Grid container spacing={5}>
                    <Grid item xs className={classes.img}>
                        <div className={classes.root2}>
                            <img src={imgContent} width="100%" height="100%" alt="experiencia" />
                        </div >
                    </Grid>
                    <Grid item xs >
                        <br />
                        <Typography className={classes.text} paragraph> <SettingsIcon/>         <b className={classes.title_text}>Customizável:</b> Sua empresa se transforma, assim como nosso sistema. Seja um processo, departamento ou setor a mais, nosso sistema pode ser rapidamente ajustado para atender esta nova necessidade, sem limites.</Typography>
                        <Typography className={classes.text} paragraph> <UpdateIcon/>           <b className={classes.title_text}>Rápido:</b> Nosso aplicativo é frequentemente otimizado pelo nosso time de desenvolvedores para garantir a rapidez que o seu negócio exige.</Typography>
                        <Typography className={classes.text} paragraph> <HttpsIcon/>            <b className={classes.title_text}>Seguro:</b> Fique tranquilo. Nosso aplicativo foi desenvolvido com as mais modernas práticas de segurança digital e é constantemente atualizado. Tenha o controle total do sistema e gerencie as permissões de cada usuário, para que tenham acesso somente aos dados necessário.</Typography>
                        <Typography className={classes.text} paragraph> <PublicIcon/>           <b className={classes.title_text}>Escalável:</b> Nosso sistema acompanha o crescimento de seu negócio. Seja qual for o volume de dados, o sistema estará adequado para a tarefa.</Typography>
                        <Typography className={classes.text} paragraph> <MemoryIcon/>           <b className={classes.title_text}>Moderno:</b> Desenvolvido com as mais modernas linguagens de programação do mercado, pode ser acessado de qualquer plataforma, é sempre atualizado com  novas tecnologias e tem interface de utilização muito simples. Facilidade e flexibilidade para o seu negócio.</Typography>
                        <Typography className={classes.text} paragraph> <ContactsIcon/>         <b className={classes.title_text}>LGPD:</b> Nosso sistema foi desenvolvido para que a sua empresa atenda a Lei Geral de Proteção de Dados. Gere relatórios e inventários de dados a qualquer momento com facilidade e sem preocupações. Garanta aos clientes acesso aos seus dados pessoais a qualquer momento.</Typography>
                        <Typography className={classes.text} paragraph> <MonetizationOnIcon/>   <b className={classes.title_text}>Baixo Custo:</b> Garantimos baixo custo de investimento, graças à adequação ao seu negócio. Valores recorrentes que cabem no seu orçamento com a garantia total de nosso suporte a qualquer momento.</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}

export default Content;
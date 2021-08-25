import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import especializado from '../../assets/images/especializado.png'
import desenvolvimento from '../../assets/images/desenvolvimento.png'

import agil from '../../assets/images/agil.png'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';

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
    }),
);

const Content: React.FC = () => {
    const classes = useStyles();
    const imgs = [[desenvolvimento, 'Temos como diferencial o foco em desenvolvimento.'], [especializado, 'Recursos especializados em aplicações SAP em diferentes módulos do sistema.'], [agil, 'Nosso processo é simplificado e ágil.']];
    return (
        <div className={classes.container}>
            <br /><br />
            <Typography className={classes.title} paragraph={true} >
                <Box >Consultoria Sap</Box>
            </Typography>
            <Typography className={classes.text} paragraph={true} >
                - Atendimento de demandas com preço fechado ou suporte (pacote mensal - baseline).<br /><br />
                - Foco na arquitetura e desenho da solução, garantindo a melhor utilização dos sistemas e ferramentas disponiveis.<br /><br />
                - Realização de sessões periódicas de status<br /><br />
                - Suporte proativo (para pacotes mensais)<br /><br />
            </Typography>

            <Card>
                <Carousel
                    interval={3500}
                    navButtonsAlwaysVisible={true}
                    fullHeightHover={false}
                    indicators={false}
                >
                    {imgs.map((img, i) =>
                        <Typography className={classes.text2} paragraph={true} >
                            <img key={i} src={img[0]} width="100%" height="100%" alt="conteudo" />
                            {img[1]}
                        </Typography>
                    )}
                </Carousel>
            </Card>
            <br />
            <br />
        </div>
    );
}

export default Content;

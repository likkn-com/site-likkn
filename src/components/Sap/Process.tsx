import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';

import i0 from '../../assets/images/process/img.png';
import i1 from '../../assets/images/process/Imagem1.jpg';
import i2 from '../../assets/images/process/Imagem2.jpg';
import i3 from '../../assets/images/process/Imagem3.jpg';
import i4 from '../../assets/images/process/Imagem4.jpg';
import i5 from '../../assets/images/process/Imagem5.jpg';
import i6 from '../../assets/images/process/Imagem6.jpg';
import i7 from '../../assets/images/process/Imagem7.jpg';
import i8 from '../../assets/images/process/Imagem8.jpg';
import i9 from '../../assets/images/process/Imagem9.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

const Process: React.FC = () => {
    const classes = useStyles();
    const imgs = [
        [i0,'Fluxo Completo.'],
        [i1,'Recebimento da demanda.'],
        [i2,'Análise inicial.'],
        [i3,'Solicitação de informações faltantes.'],
        [i4,'Desenho da solução.'],
        [i5,'Documentação Técnica.'],
        [i6,'Desenvolvimento.'],
        [i7,'Testes.'],
        [i8,'Evidência de Testes.'],
        [i9,'Entrega.'],
    ];
    return (
        <Carousel
            interval={3500}
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            indicators={true}
        >
            {imgs.map((img, i) =>
                <Typography className={classes.text2} paragraph={true} >
                    <img key={i} src={img[0]} width="100%" height="100%" alt="conteudo" />
                    {img[1]}
                </Typography>
            )}
        </Carousel>

    );
}

export default Process;

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';

import i0 from '../../assets/images/process/img.png';
import i1 from '../../assets/images/process/Imagem1.png';
import i2 from '../../assets/images/process/Imagem2.png';
import i3 from '../../assets/images/process/Imagem3.png';
import i4 from '../../assets/images/process/Imagem4.png';
import i5 from '../../assets/images/process/Imagem5.png';
import i6 from '../../assets/images/process/Imagem6.png';
import i7 from '../../assets/images/process/Imagem7.png';
import i8 from '../../assets/images/process/Imagem8.png';
import i9 from '../../assets/images/process/Imagem9.png';
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
        border: {
            border: 'solid',
            borderColor: 'black',
        },
    }),
);
const Process: React.FC = () => {
    const classes = useStyles();
    const imgs = [
        [<img src={i0} width="100%" height="100%" alt="fluxo" />, 'Fluxo Completo.'],
        [<img src={i1} width="98%" height="98%" alt="recebimento" className={classes.border}/>, 'Recebimento da Demanda.'],
        [<img src={i2} width="98%" height="98%" alt="analise" className={classes.border}/>, 'Análise da Demanda.'], 
        [<img src={i3} width="98%" height="98%" alt="solicitação" className={classes.border}/>, 'Solicitação de Informações.'],
        [<img src={i4} width="98%" height="98%" alt="desenho" className={classes.border}/>, 'Desenho da Solução.'],
        [<img src={i5} width="98%" height="98%" alt="escopo" className={classes.border}/>, 'Escopo e Documentação Tecnica.'],
        [<img src={i6} width="98%" height="98%" alt="desenvolvimento" className={classes.border}/>, 'Desenvolvimento.'],
        [<img src={i7} width="98%" height="98%" alt="testes" className={classes.border}/>, 'Testes.'],
        [<img src={i8} width="98%" height="98%" alt="evidencias" className={classes.border}/>, 'Evidência de Testes.'],
        [<img src={i9} width="98%" height="98%" alt="entrega" className={classes.border}/>, 'Entrega.'],
    ];
    return (
        <Carousel
            interval={2500}
            navButtonsAlwaysVisible={false}
            fullHeightHover={true}
            indicators={true}
            navButtonsProps={{          
                style: {
                    backgroundColor: '#b1abab7d',
                    color:'#172A3A',
            }
        }} 
         
        >
            {imgs.map((img, i) =>
                <Typography className={classes.text2} paragraph={true} >
                    {img[0]}
                    <br></br>
                    {img[1]}
                </Typography>
            )}

        </Carousel>

    );
}

export default Process;

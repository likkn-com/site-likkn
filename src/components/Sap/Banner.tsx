import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import especializado from '../../assets/images/especializadoN.png'
import desenvolvimento from '../../assets/images/desenvolvimentoN.png'
import agil from '../../assets/images/agilN.png'
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            left: '50%',
            transform: 'translate(-50%)',
        },
        text2: {
            fontSize: '100%',
            textAlign: 'center',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            maxWidth: '600px',
        },
        root: {
            flexGrow: 1,
        },

    }),
);

const Banner: React.FC = () => {
    const classes = useStyles();
    const imgs = [
        [desenvolvimento, 'Temos como diferencial o foco em desenvolvimento.'],
        [especializado, 'Recursos especializados em aplicações SAP em diferentes módulos do sistema.'],
        [agil, 'Nosso processo é simplificado e ágil.']
    ];
    return (
        <div className={classes.container}>
            <div className={classes.container}>
                <div className={classes.root}>
                    <br/><br/>
                    <Carousel
                        interval={3500}
                        navButtonsAlwaysVisible={false}
                        fullHeightHover={false}
                        indicators={false}
                        navButtonsProps={{
                            style: {
                                backgroundColor: '#b1abab7d',
                                color: '#172A3A',
                            }
                        }}
                    >
                        {imgs.map((img, i) =>
                            <Typography className={classes.text2} paragraph={true} >
                                <img key={i} src={img[0]} width="100%" height="100%" alt="conteudo" />
                                {img[1]}
                            </Typography>
                        )}
                    </Carousel>
                    <br />
                    <br />
                </div>
            </div>

        </div>
    );
}

export default Banner;

import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeCard from './HomeCard';
import Grid from '@material-ui/core/Grid';

import bg from "../../assets/images/bgPart.png";
import hermes from "../../assets/images/hermes.png";
import renato from "../../assets/images/renato.png";
import pedro from "../../assets/images/pedro.png";
import erick from "../../assets/images/erick.png";
import eduardo from "../../assets/images/Eduardo.png";



const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        background: {
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
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
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
      
          },
          titlev2: {
            fontSize: '120%',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#B0D236',
          },
          text: {
            fontSize: '100%',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            textAlign: 'justify',
          },
          img:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
    }),
);

const Partners: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>

            <br/>
            <div className={classes.container}>
                <div className={classes.root}>
                    <br/><br/><br/>
                    

                    <Grid container spacing={10} >
                        <Grid item >
                            <HomeCard name={"Hermes Alves"}
                             img={hermes}
                             office={"CO-FOUNDER"}
                             link={'https://www.linkedin.com/in/hermesfelipe/'}
                             desc={"Após uma carreira de sucesso como Engenheiro de Software, atuando por mais de 15 anos na implementação de soluções de software em grandes empresas no mundo todo, decidi mudar o foco da minha atuação para fornecer aos clientes as tecnologias mais modernas disponíveis no mercado, a custos acessíveis."}/>
                        </Grid>
                        <Grid item >
                            <HomeCard name={"Renato Carvalhais"}
                             img={renato}
                             office={"CO-FOUNDER"}
                             link={'https://www.linkedin.com/in/renato-carvalhais/'}
                             desc={"Formado em Tecnologia da Informação, atuou por mais de 10 anos como desenvolvedor de aplicações para ERP’s (Enterprise Resource Planning). Empreendedor com algumas empresas no currículo, adquiriu experiência na administração de negócios, conhecendo o mundo da TI não só como profissional mas também como cliente."}/>
                        </Grid>

                        <Grid item >
                            <HomeCard name={"Pedro Goya"}
                             img={pedro}
                             office={"PARTNER"}
                             link={'https://www.linkedin.com/in/pedro-goya-neto-772585a/'}
                             desc={"Formado em Engenharia Química, atuou 12 anos como engenheiro de processos desenvolvendo soluções inovadoras e implementando processos para grandes empresas. Ingressou na área de programação por vocação com o objetivo de oferecer softwares customizados e intuitivos que facilitam os processos e aumentam a produtividade."}/>
                        </Grid>


                        <Grid item >
                            <HomeCard name={"Erick Escagion"}
                             img={erick}
                             office={"DEVELOPER"}
                             link={'https://www.linkedin.com/in/erickescagion/'}
                             desc={"Estudande de engenharia de computação na Facens e Dev da likkn, gosta de ir além da parte técnica, entender os clientes e suas necessidades é o que o move no desenvolvimento de softwares, solucionar as demandas dos clientes da melhor maneira possível"}/>
                        </Grid>


                        <Grid item >
                            <HomeCard name={"José Bieco"}
                             img={eduardo}
                             office={"DEVELOPER"}
                             link={'https://www.linkedin.com/in/josebieco/'}
                             desc={"Um rapaz muito bonito, elegante e educado. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                        </Grid>

                    </Grid>

                  </div>
            </div>
            <br/>
        </div>
    );
}

export default Partners;
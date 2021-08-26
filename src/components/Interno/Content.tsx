import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgContent from '../../assets/images/content.png'
import Typography from '@material-ui/core/Typography';
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
    }

});


const Content: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <br />
                <Typography className={classes.title} paragraph >Vantagens</Typography>
                <Grid container spacing={10}>
                    <Grid item xs className={classes.img}>
                        <div className={classes.root2}>
                            <img src={imgContent} width="100%" height="100%" alt="experiencia" />
                        </div >
                    </Grid>

                    <Grid item xs className={classes.root2}>
                        <Typography className={classes.text}>Nosso sistema é altamente customizável, de rápida e segura implementação, escalável e moderno, já preparado de acordo com a LGPD e com um investimento de baixo custo comparado ao seu retorno.</Typography>
                    </Grid>

                </Grid>
            </div>
        </div>

    );
}

export default Content;
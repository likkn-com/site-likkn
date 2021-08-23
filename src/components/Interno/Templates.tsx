import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TemplateCardItem from './TemplateCardItem';
import img1 from '../../assets/images/hermes.png'

import img2 from '../../assets/images/renato.png'
import img3 from '../../assets/images/pedro.png'




const useStyles = makeStyles(() =>
    createStyles({
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
        background: {
            background: '#CDE0EC',
        },
        title: {
            fontSize: '150%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },

    }),
);


const Templates: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <br />
                <Typography className={classes.title} paragraph={true}>
                    <Box >Templates</Box>
                </Typography>

                <TemplateCardItem
                    title={'Sistema de Agendamento'}
                    desc={'Mollitia eligendi ratione nam ipsum, deleniti sapiente laudantium, labore libero eaque provident cupiditate porro est soluta rerum veritatis voluptatibus amet? Temporibus ea incidunt molestias dicta magnam? Dignissimos asperiores facere soluta, aliquam cumque deleniti eum eius libero delectus ea quis voluptas consequuntur ut provident temporibus quae! Blanditiis ad veniam magni animi asperiores illo placeat.'}
                    imgs={[img1, img2, img3]}
                />
                <br />
                <TemplateCardItem
                    title={'tet'}
                    desc={'desctesdsdt'}
                    imgs={['img1', 'img2', img1]}
                />
                <br />
            </div>
        </div>
    );
}

export default Templates;
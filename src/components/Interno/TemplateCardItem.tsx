import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Toolbar } from '@material-ui/core';
import logo from '../../assets/images/logo.png'

//https://github.com/Learus/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel'

interface TemplateCardItemProps {
    title: string;
    desc: string;
    imgs: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: '100%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        content: {
            maxWidth: '80%',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            textAlign: 'justify',
            fontSize: '90%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        img:{
           textAlign: 'center'
        },
        title: {
            fontSize: '130%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
          },
    }),
);


const TemplateCardItem: React.FC<TemplateCardItemProps> = ({ title, desc, imgs }, TemplateCardItemProps) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>

            <CardActions disableSpacing>
                <Typography className={classes.title}>  
                <Toolbar>
                    <img src={logo} alt="logo" /> {title}
                </Toolbar>
  
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

               <Carousel
                    interval={4000}
                    navButtonsAlwaysVisible={false}
                    fullHeightHover={false}
                    className={classes.img}
                >
                    {
                        imgs.map( (img, i) =><img key={i} src={img} width="70%" height="70%" alt="conteudo"/> )
                    }
                </Carousel>

                    <br/>
                    <br/>
                    <Typography>
                        <Box className={classes.content}>
                            {desc}
                        </Box>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default TemplateCardItem;

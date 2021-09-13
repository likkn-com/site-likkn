import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import admpublica from "../../assets/images/admpublica.svg";
import qualidade from "../../assets/images/qualidade.svg";
import adequacao from "../../assets/images/adequacao.svg";
import transparencia from "../../assets/images/transparencia.svg";
import necessidade from "../../assets/images/necessidade.svg";
import livreacesso from "../../assets/images/livreacesso.svg";
import seguranca from "../../assets/images/seguranca.svg";
import prevencao from "../../assets/images/prevencao.svg";
import naodiscriminacao from "../../assets/images/naodiscriminacao.svg";
import responsabilizacao from "../../assets/images/responsabilizacao.svg";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootBase: {
            maxWidth: 345,
            minWidth: 270,
            marginBottom: 25,
            minHeight: 670,
        },
        root: {
            maxWidth: 152,
            minWidth: 152,
            minHeight: 172,
            marginBottom: 5,
            background: "#F6F6F6",
        },
        expand: {
            transform: "rotate(0deg)",
            // marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: "rotate(180deg)",
        },
        visible: {
            display: "flex",
            paddingTop: 0,
            padding: 16,
            alignItems: "center",
            justifyContent: "right",
        },
        invisible: {
            display: "none",
        },
        visible2: {
            display: "flex",
            paddingBottom: 16,
            // padding: 16,
            alignItems: "center",
            justifyContent: "right",
            // display: "block",
            // marginLeft: "275px",
        },
        readmore: {
            marginRight: 10,
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        cardContentExpanded: {
            paddingTop: 0,
            paddingBottom: "0 !important",
        },
        cardcontent: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 0,
            paddingBottom: 0,
        },
        headerBase: {
            fontSize: '150%',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            textAlign: 'left',
            padding: '10px',
        },
        header: {
            height: 50,
            padding: 15,
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            textAlign: "center",
        },

        header80: {
            height: 50,
            padding: 15,
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            textAlign: "center",
            fontSize: '80%'
        },

        text: {
            fontSize: '100%',
            textAlign: 'left',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        image: {
            display: "flex",
            justifyContent: "center",
            paddingBottom: 15,
        },
    })
);

const PrinciplesCard: React.FC = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        setVisible(!visible);
    };

    return (
        <Card className={classes.rootBase}>
            <Typography className={classes.headerBase} > Princípios </Typography>
            <CardContent className={classes.cardcontent}>
                {/*Finalidade*/}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Princípios </Typography>
                    <div className={classes.image}>
                        <img src={admpublica} alt="admpublica" />
                    </div>
                </Card>
                {/* Qualidade */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Qualidade dos dados </Typography>
                    <div className={classes.image}>
                        <img src={qualidade} alt="qualidade" />
                    </div>
                </Card>
                {/* Adequacao */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Adquação </Typography>

                    <div className={classes.image}>
                        <img src={adequacao} alt="adequacao" />
                    </div>
                </Card>
                {/* Necessidade */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Necessidade </Typography>

                    <div className={classes.image}>
                        <img src={necessidade} alt="necessidade" />
                    </div>
                </Card>
                {/* LivreAcesso */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Livre Acesso </Typography>
                    <div className={classes.image}>
                        <img src={livreacesso} alt="livreacesso" />
                    </div>
                </Card>
                {/* Transparencia */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Transparência </Typography>
                    <div className={classes.image}>
                        <img src={transparencia} alt="transparencia" />
                    </div>
                </Card>
            </CardContent>
            <CardActions
                disableSpacing
                className={clsx(classes.visible, {
                    [classes.invisible]: visible,
                })}
            >
                <Typography className={classes.readmore}>Leia mais</Typography>
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
                <CardContent className={classes.cardcontent + " " + classes.cardContentExpanded}>

                    {/* Seguranca */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header} > Segurança </Typography>
                        <div className={classes.image}>
                            <img src={seguranca} alt="seguranca" />
                        </div>
                    </Card>
                    {/* Prevencao */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header} > Prevenção </Typography>
                        <div className={classes.image}>
                            <img src={prevencao} alt="prevencao" />
                        </div>
                    </Card>
                    {/* NaoDiscriminacao */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header} > Não discriminação </Typography>

                        <div className={classes.image}>
                            <img src={naodiscriminacao} alt="naodiscriminacao" />
                        </div>
                    </Card>
                    {/* Responsabilizacao  */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header80} > Responsabilização e prestação de contas </Typography>
                        <div className={classes.image}>
                            <img src={responsabilizacao} alt="responsabilizacao" />
                        </div>
                    </Card>
                </CardContent>
                <CardActions disableSpacing className={classes.visible2}>
                    <Typography className={classes.readmore}>Reduzir</Typography>
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
            </Collapse>
        </Card>
    );
};

export default PrinciplesCard;

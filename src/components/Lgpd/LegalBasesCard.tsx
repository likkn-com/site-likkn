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

import consentimento from "../../assets/images/consentimento.svg";
import estudo from "../../assets/images/estudo.svg";
import obrigacaolegal from "../../assets/images/obrigacaolegal.svg";
import admpublica from "../../assets/images/admpublica.svg";
import contrato from "../../assets/images/contrato.svg";
import esferaprocessual from "../../assets/images/esferaprocessual.svg";
import protecaovida from "../../assets/images/protecaovida.svg";
import saude from "../../assets/images/saude.svg";
import legitimointeresse from "../../assets/images/legitimointeresse.svg";
import credito from "../../assets/images/credito.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootBase: {
            maxWidth: 345,
            minWidth: 270,
            minHeight: 670,
            marginBottom: 25,
        },
        media: {
            height: 0,
            paddingTop: "56.25%", // 16:9
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
        midiaPrincipios1: {
            height: "270px",
            backgroundSize: "auto",
            backgroundPosition: "top",
        },
        midiaPrincipios2: {
            height: "510px",
            backgroundSize: "auto",
            backgroundPosition: "top",
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

        text: {
            fontSize: '100%',
            textAlign: 'left',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
        },
        root: {
            maxWidth: 152,
            minWidth: 152,
            minHeight: 172,
            marginBottom: 5,
            background: "#F6F6F6",
        },

        image: {
            display: "flex",
            justifyContent: "center",
            paddingBottom: 15,
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

    })
);

const LegalBasesCard: React.FC = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        setVisible(!visible);
    };

    return (
        <Card className={classes.rootBase}>
            <Typography className={classes.headerBase} > Bases Legais </Typography>

            <CardContent className={classes.cardcontent}>
                {/*<Consentimento />*/}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Consentimento </Typography>
                    <div className={classes.image}>
                        <img src={consentimento} alt="consentimento" />
                    </div>
                </Card>
                {/*<LegitimoInteresse />*/}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Legítimo interesse </Typography>

                    <div className={classes.image}>
                        <img src={legitimointeresse} alt="legitimointeresse" />
                    </div>
                </Card>
                {/*<Contrato /> */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Execução de Contrato </Typography>

                    <div className={classes.image}>
                        <img src={contrato} alt="contrato" />
                    </div>
                </Card>
                {/*<ObrigacaoLegal /> */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header80} > Obrigação Legal ou Regulatória </Typography>

                    <div className={classes.image}>
                        <img src={obrigacaolegal} alt="obrigacaolegal" />
                    </div>
                </Card>
                {/*<AdmPublica /> */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Administração Pública </Typography>
                    <div className={classes.image}>
                        <img src={admpublica} alt="admpublica" />
                    </div>
                </Card>
                {/*<FinsEstudos /> */}
                <Card variant="outlined" className={classes.root}>
                    <Typography className={classes.header} > Fins de Estudos </Typography>

                    <div className={classes.image}>
                        <img src={estudo} alt="estudo" />
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
                    {/*<EsferaProcessual /> */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header80} > Exercício Regular na Esfera Processual </Typography>

                        <div className={classes.image}>
                            <img src={esferaprocessual} alt="esferaprocessual" />
                        </div>
                    </Card>
                    {/*<ProtecaoVida /> */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header80} > Proteção da vida ou incolumidade física </Typography>
                        <div className={classes.image}>
                            <img src={protecaovida} alt="protecaovida" />
                        </div>
                    </Card>
                    {/*<TutelaSaude /> */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header} > Saúde </Typography>
                        <div className={classes.image}>
                            <img src={saude} alt="saude" />
                        </div>
                    </Card>
                    {/*<ProtecaoCredito /> */}
                    <Card variant="outlined" className={classes.root}>
                        <Typography className={classes.header} > Proteção do crédito </Typography>
                        <div className={classes.image}>
                            <img src={credito} alt="credito" />
                        </div>
                    </Card>
                    {/* */}
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

export default LegalBasesCard;

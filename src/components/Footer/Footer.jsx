import React from 'react';
import Box from '@material-ui/core/Box';
import termos from "../../assets/documents/Termos-de-Uso-e-Politica-de-Privacidade.pdf"

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
  }),
);

const Footer: React.FC = () => {
    const classes = useStyles();
  return (
    <Box
        color = "white"
        fontFamily = "Montserrat"
        display="flex"
        fontSize = "78%"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        p={1}
        m={1}
        bgcolor="#172A3A"
        sx={{ height: 50 }}
    >
        <Box p={1} order={2}>
            <a 
                className={classes.link}
                target="_blank"
                href={termos} rel="noreferrer">
                    Política de Privacidade
            </a> 
        </Box>
        <Box order={3}> - </Box>
        <Box p={1} order={4}> Likkn.com @2021 </Box>
    </Box>

  );
}

export default Footer;
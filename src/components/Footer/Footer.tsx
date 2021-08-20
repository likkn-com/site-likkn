import React from 'react';
import Box from '@material-ui/core/Box';
import termos from "../../assets/documents/Termos-de-Uso-e-Politica-de-Privacidade.pdf"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';
import Termo from './Termo';


const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: 'rgb(255, 255, 255)',
      fontFamily: "Montserrat",
      textDecoration: 'none',
      '&:hover': {
        color: '#d8dde0',
      }
    },
    internal: {
      '& > *': {
        margin: 0,
        padding: 0,
      },
      width: '80%',
      display: 'flex',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
    },
    external: {
      background: "#172A3A",
    },
    title: {
      textAlign: "center",
      background: "#172A3A",
      color: 'white',
      '&:hover': {
        background: '#172A3A',
      }
    }
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.external}>
      <div className={classes.internal}>
        <Box
          color="white"
          fontFamily="Montserrat"
          display="flex"
          fontSize="72%"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          p={1}
          m={1}
          bgcolor="#172A3A"
          sx={{ height: 50 }}
        >
          <Box p={1} order={2}>
            <Button onClick={handleClickOpen} className={classes.link}>
              <Tooltip title="Abrir Termo">
                <Box p={1} order={4}> Política de Privacidade</Box>
              </Tooltip>
            </Button>
          </Box>
          <Box order={3}> - </Box>
          <Box p={1} order={4}> Likkn.com</Box>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose} >

        <Button onClick={handleClickOpen} className={classes.title}>
          <DialogTitle id="Termos" >
            <a
              className={classes.link}
              target="_blank"
              href={termos} rel="noreferrer">
              Política de Privacidade
            </a>
          </DialogTitle>
        </Button>

        <DialogContent>
          <Tooltip title="Termo">
            <Termo />
          </Tooltip>
        </DialogContent>
      </Dialog>


    </div>
  );
}

export default Footer;
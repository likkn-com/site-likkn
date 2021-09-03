import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
    },
    btn: {
      background: '#172A3A',
      position: 'fixed',
      zIndex: 9999,
      right: '2%',
      bottom: '10%',
      borderRadius: '30px',
      width: '2px',

    },
    icon: {
      color: '#ffffff',
    },
    dialog: {

      background: '#172A3A',
      color: '#ffffff',
      textAlign: 'center',
    },

    dialogBtn: {
      background: '#ffffff',
      color: '#172A3A',
      margin: theme.spacing(1),
      fontFamily: 'montserrat',
      fontWeight: 'bold',
      '&:hover': {
        background: '#172A3A',
        color: '#ffffff',
      }
    },

    form: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    text: {
      width: '96%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',

    },
    dialogContent: {
      maxWidth: 270,

    },
    font: {
      fontFamily: 'montserrat',
      fontWeight: 'bold',
      fontSize: '100%',
    }
  }),
);

const Contacts: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [subject, setSubject] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //logica para envio
    setOpen(false);
  };

  function changeSubject(e: any) {
    setSubject(e.target.value);
  }

  function changeContent(e: any) {
    setContent(e.target.value);
  }

  //comercial@likkn.com
  var email = 'mailto:comercial@likkn.com?subject=' + subject + '&body=' + content;
  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.btn} onClick={handleClickOpen}>
        <IconButton>
          <ContactSupportIcon className={classes.icon} />
        </IconButton>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog} id="form-dialog-title">
          <Typography className={classes.font}> Contate-nos </Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <form className={classes.form} noValidate autoComplete="off" method="post" action={email}>

            <TextField id="Subject" label="Assunto" variant="outlined" placeholder="Assunto" onChange={changeSubject} className={classes.text} />

            <TextField id="msg" label="Conteudo" variant="outlined" placeholder="olá, gostaria de saber mais sobre seus produtos...." onChange={changeContent} className={classes.text} multiline minRows={6} />

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              className={classes.dialogBtn}
              endIcon={<Icon>send</Icon>}
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialog}></DialogActions>
      </Dialog>
    </div>
  );
}

export default Contacts;
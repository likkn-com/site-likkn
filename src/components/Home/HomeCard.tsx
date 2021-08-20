import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


interface HomeCardProps {
  desc: string;
  img: string;
  office: string;
  name: string;
  link: string;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    borderRadius: '15px',
  },
  img:{
    borderRadius: '50%',
  },
  box:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBoxBC:{
    background: 'linear-gradient( 160deg, #a5cceb, hsla(50, 50%, 95%, 50))',
  },
  title:{
    background: '#2F8A41',
    textAlign:'center',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '150%'
  },
  office:{
    background: '#1F9BDF',
    textAlign:'center',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '100%'
  },
  textDesc:{
    background: '#ffffff',
    textAlign:'left',
    fontFamily: 'Montserrat',
    fontSize: '100%',
    fontWeight: 'bold',
  },
  icon:{
    color: '#0e76a8',
    fontSize: '50px'
  },
  link:{
    textDecoration: 'none',
  }
});


const HomeCard: React.FC<HomeCardProps> = ({ desc, img, name, office, link }, HomeCardProps) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} variant="outlined">
        <Typography className={classes.box + ' ' + classes.imgBoxBC}>
          <div >
            <br/><br/>
            <img className={classes.img} src={img} width="130px" alt="user_mg" />     
            <br/><br/>
          </div>
        </Typography>
 
        <Typography variant="h4" className={classes.title}>
          {name}
        </Typography>

        <Typography variant="h5" className={classes.office}>
          {office}
        </Typography>
        <CardContent>

        <Typography variant="h6" className={classes.textDesc}>
          {desc}
          <div className={classes.box}>
            <a
              className={classes.link}
              target="_blank"
              href={link} rel="noreferrer">
              <LinkedInIcon className={classes.icon}/>
            </a>
          </div>

        </Typography>

        </CardContent>

    </Card>
  );
}

export default HomeCard;

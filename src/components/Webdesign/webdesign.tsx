import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import web_development_img from "../../assets/images/web-development.png";
import { Grid } from "@material-ui/core";

// import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // maxWidth: 1060,
    width: 380,
    background: '#F2F7FA',
  },
  media: {
    height: 280,
  },
  grid: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  }
});

// import { Container } from './styles';

const Webdesign: React.FC = () => {
  
  const classes = useStyles();
   
  return (
    <Grid container className={classes.grid} direction="row" justifyContent="center" alignItems="center">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={web_development_img}
          title="Desenvolvimento Web"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Desenvolvimento Web
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam possimus doloribus provident doloremque a in pariatur ex unde, non animi eaque nobis repudiandae praesentium voluptatum enim. Unde, temporibus ullam.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
}

export default Webdesign;

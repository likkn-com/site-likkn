import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
    text: {
      fontSize: '100%',
      textAlign: 'justify',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '150%',
      fontFamily: 'montserrat',
      fontWeight: 'bold',
    },
  }),
);


const HeaderInterno: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <br /><br />
      <Typography className={classes.title} paragraph={true} >
        <Box >Sistema interno</Box>
      </Typography>
      <Typography className={classes.text} paragraph={true}>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque voluptas, minus deserunt, laborum iusto, exercitationem eius eum vero natus deleniti quis accusamus aliquam neque placeat? Nisi vitae illo possimus vero quia dolorem? Aliquam quaerat saepe aspernatur, atque ipsam id? Laudantium a recusandae provident corporis dignissimos rem. Mollitia eligendi ratione nam ipsum, deleniti sapiente laudantium, labore libero eaque provident cupiditate porro est soluta rerum veritatis voluptatibus amet? Temporibus ea incidunt molestias dicta magnam? Dignissimos asperiores facere soluta, aliquam cumque deleniti eum eius libero delectus ea quis voluptas consequuntur ut provident temporibus quae! Blanditiis ad veniam magni animi asperiores illo placeat.
        </Box>
      </Typography>
      <br />
    </div>
  );
}

export default HeaderInterno;
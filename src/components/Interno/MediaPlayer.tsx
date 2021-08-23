import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import video from '../../assets/videos/teste.mp4'

//https://www.npmjs.com/package/react-player

const useStyles = makeStyles({
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

});


const MediaPlayer: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ReactPlayer 
                url={video}
                width='100%'
                controls={true}
                playing={true}
                loop={true}
                muted={false}
                
            />
            <br/>
        </div>

    );
}

export default MediaPlayer;
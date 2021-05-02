import React from 'react';
import AudioPlayer from 'material-ui-audio-player';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'block',
            margin: '0 auto'
        },
        playIcon: {
            color: '#f50057',
            '&:hover': {
                color: '#ff4081',
            },
        },
        replayIcon: {
            color: '#f50057',
            '&:hover': {
                color: '#ff4081',
            },
        },
        pauseIcon: {
            color: '#f50057',
            '&:hover': {
                color: '#ff4081',
            },
        },
    };
});


export default function AudioComponent(props) {


    return (
        <>

            <AudioPlayer
                src={props.audio}
                displaySlider={false}
                volume={false}
                width={50}
                useStyles={useStyles}
                elevation={0}
            />
        </>
    )
}


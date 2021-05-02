import React from 'react';
import AudioComponent from './AudioComponent';
import Typography from '@material-ui/core/Typography';


export default function Phonetic(props) {

    return (
        <>
            <AudioComponent audio={props.phonetic.audio} />
            <Typography variant="h6">{props.phonetic.text}</Typography>
        </>
    )
}

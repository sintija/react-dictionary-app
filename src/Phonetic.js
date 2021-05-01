import React from 'react';
import Typography from '@material-ui/core/Typography';
import AudioComponent from './AudioComponent';


export default function Phonetic(props) {

    return (
        <div>
            <Typography variant="h6">{props.phonetic.text}</Typography>
            <AudioComponent audio={props.phonetic.audio} />
        </div>
    )
}

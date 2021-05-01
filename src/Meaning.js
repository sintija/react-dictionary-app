import React from 'react';
import Typography from '@material-ui/core/Typography';
import Synonyms from './Synonyms';

export default function Meaning(props) {
    return (
        <div>
            <Typography variant="h6">{props.meaning.partOfSpeech}</Typography>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        < Typography variant="body1" >
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                            <Synonyms synonyms={definition.synonyms} />
                        </Typography>
                    </div>
                )
            })}
        </div >
    )
}

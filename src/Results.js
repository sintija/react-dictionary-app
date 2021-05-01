import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Meaning from './Meaning';


const useStyles = makeStyles((theme) => ({
    resultsItems: {
        marginTop: '2rem',
    },
    h4: {
        fontWeight: '500',
    },

}));

export default function Results(props) {
    const classes = useStyles();

    if (props.results) {
        return (
            <>
                <Typography className={classes.h4} variant="h4">{props.results.word}</Typography>
                <Typography variant="h6">{props.results.word}</Typography>
                <Typography variant="body1">{props.results.meanings.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
                </Typography>
                <Typography variant="h6">Synonyms</Typography>
            </>
        )

    } else {
        return null;
    }
}

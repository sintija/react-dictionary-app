import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    h4: {
        fontWeight: '500',
        textAlign: 'center'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center'
    },
    phonetics: {
        textAlign: 'center',
        justifyContent: 'center',
    }

}));


export default function Results(props) {
    const classes = useStyles();

    if (props.results) {
        return (
            <>
                <Card className="Card">
                    <CardContent>
                        <Grid className={classes.grid}>
                            <Grid item xs={12}>
                                <Typography className={classes.h4} variant="h4">{props.results.word}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.phonetics}>
                            {props.results.phonetics.map((phonetic, index) => {
                                return (
                                    <div key={index}>
                                        <Phonetic phonetic={phonetic} />
                                    </div>
                                )
                            })}
                        </Grid>
                    </CardContent>
                </Card>


                <Typography variant="body1">{props.results.meanings.map((meaning, index) => {
                    return (
                        <Card className="Card" key={index}>
                            <CardContent>
                                <Meaning meaning={meaning} />
                            </CardContent>
                        </Card>
                    )
                })}
                </Typography>
            </>
        )

    } else {
        return null;
    }
}

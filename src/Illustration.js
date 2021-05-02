import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import illustration from './images/girl.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    illustration: {
        width: '50vh',
        display: 'flex',
        margin: '0 auto',
        paddingTop: '3rem',
    }

}));

export default function Illustration() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <img className={classes.illustration} src={illustration} alt='search-illustration' />
                </Grid>
            </Grid>
        </div>
    )
}

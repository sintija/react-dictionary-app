import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Results from './Results';


const useStyles = makeStyles((theme) => ({
    form: {
        textAlign: 'center',
        marginTop: '2rem'
    },
    formButton: {
        width: '108px',
        height: '55px',
        marginLeft: '1rem',
        border: 'solid 2px #1a1a1a',
        borderRight: 'solid 4px #1a1a1a',
        borderBottom: 'solid 4px #1a1a1a',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        textTransform: 'none',
        letterSpacing: '0.1rem'
    },
}));

export default function Dictionary() {
    const classes = useStyles();
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    return (
        <div>
            <Grid container className={classes.containe}>
                <Grid item xs={12}>
                    <form className={classes.form} noValidate autoComplete="off" onSubmit={search}>
                        <TextField id="outlined-basic" type="search" label="Type a word" variant="outlined" onChange={handleKeywordChange} />
                        <Button className={classes.formButton} variant="contained">Search</Button>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Results results={results} />
                </Grid>
            </Grid>
        </div>
    )
}

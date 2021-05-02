import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Results from './Results';
import PhotosComponent from './PhotosComponet';


const useStyles = makeStyles((theme) => ({
    form: {
        textAlign: 'center',
        marginTop: '2rem',
    },
    input: {
        width: '20rem',
        borderRight: 'solid 4px #0f0f12',
        borderBottom: 'solid 4px #0f0f12',
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
    let [photos, setPhotos] = useState(null)

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        // console.log(response.data[0])
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
        console.log(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        let pexelsApiKey = '563492ad6f91700001000001009cc8b42d664a05a45d98b373fa50ac';
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`
        axios.get(pexelsApiUrl,
            { headers: headers }).then(handlePexelsResponse);
    }
    return (
        <div>
            <Grid container className={classes.containe}>
                <Grid item xs={12}>
                    <form className={classes.form} noValidate autoComplete="off" onSubmit={search}>
                        <TextField className={classes.input} id="outlined-basic" type="search" label="Type a word" variant="outlined" onChange={handleKeywordChange} />

                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Results results={results} />
                    <PhotosComponent photos={photos} />
                </Grid>
            </Grid>
        </div>
    )
}

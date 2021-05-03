import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Results from "./Results/Results";
import PhotosComponent from "./PhotosComponent/PhotosComponet";
import ImageList from "@material-ui/core/ImageList";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: "center",
    marginTop: "2rem",
  },
  input: {
    width: "20rem",
    borderRight: "solid 4px #0f0f12",
    borderBottom: "solid 4px #0f0f12",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    textTransform: "none",
    letterSpacing: "0.1rem",
  },
}));

export default function Dictionary(props) {
  const classes = useStyles();
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

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

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001009cc8b42d664a05a45d98b373fa50ac";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                className={classes.input}
                id="outlined-basic"
                type="search"
                label="Search for word (try:sunset, moon, frog)"
                variant="outlined"
                onChange={handleKeywordChange}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <Results results={results} />
            <Box className="gallery-container" sx={{ overflowY: "scroll" }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                <PhotosComponent photos={photos} />
              </ImageList>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

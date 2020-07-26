import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, TextField } from "@material-ui/core";
import { baseUrl, axiosConfig } from "./api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: 300,
    height: 300,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
  },
}));

export default function CriaPlayList() {
  const classes = useStyles();
  const [playlistDigitada, setPlaylistDigitada] = useState("");

  const criaPlaylist = (event) => {
    event.preventDefault()
    const body = {
      name: playlistDigitada,
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        console.log(response);
        alert(`Playlist Criada com Sucesso`);
        setPlaylistDigitada(playlistDigitada);
        setPlaylistDigitada("")
      })
      .catch((erro) => {
        console.log(erro);
        alert("ERRO ao criar Playlist");
      });
  };

  const onChangeInput = (event) => {
    setPlaylistDigitada(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <TextField
            value={playlistDigitada}
            type="text"
            placeholder="Nova playlist"
            onChange={onChangeInput}
          />
          <div>
            <Button variant="outlined" color="primary" onClick={criaPlaylist}>
              Salvar Playlist
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

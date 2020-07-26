import React, { useState } from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 300,
    height:300,
    marginTop:15,

  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function AdicionaMusicaPlayList () {
  
  const classes = useStyles();
  const [list, setPlaylistDigitada] = useState("");
  const [musicaDigitada, setMusicaDigitada] = useState("");
  const [artistaDigitado, setArtistaDigitado] = useState("");
  const [urlDigitada, setUrlDigitada] = useState("");



    const criaMusica = () => {
      const body = {
        name: musicaDigitada,
        artist:artistaDigitado,
        url: urlDigitada,
      }
      
      axios
      .post(`https://us-central1-https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/a93d83c6-c292-4234-8d69-f5d63c43f77b/tracks`, body,
      {
        headers: {
            authorization: "kaueny-alves-mello" }
      }
      )
      .then(response => {
        console.log(response.data)
        alert(`Musica Criada com Sucesso`)
      
      })
      .catch(erro => {
        console.log(erro)
        alert("ERRO ao criar Musica")
      })
   
  }

  const onChangeMusica = event => {
      console.log(this.musicaDigitada)
      setMusicaDigitada(event.target.value)
  }

  const onChangeArtista = event => {
      setArtistaDigitado(event.target.value)
  }

  const onChangeUrl = event => {
      setUrlDigitada(event.target.value)
  }


    
        return(
          <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>

            <TextField
              type="text"
              placeholder="musica"
              onChange={onChangeMusica}
            />
             <TextField
              value={artistaDigitado}
              type="text"
              placeholder="artista"
              onChange={onChangeArtista}
            />
             <TextField
              value={urlDigitada}
              type="url"
              placeholder="url"
              onChange={onChangeUrl}
            />
            <Button 
            variant="outlined"
            color="primary"
            onClick= {()=> criaMusica()}>Criar Musica</Button>
            </CardContent>
            </div>
          </Card>
          
         ) }



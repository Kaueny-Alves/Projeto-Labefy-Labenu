import React from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

class CriaPlayList extends React.Component {

    state ={
        playlistDigitada: "",
    }

  
    criaPlaylist = () => {
        const body = {
          name: this.state.playlistDigitada
        }
       
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {
          headers: {
              authorization: "kaueny-alves-mello" }
        }
        )
        .then(response => {
          console.log(response.data)
          alert(`Playlist Criada com Sucesso`)
          this.setState({ playlistDigitada: "" })
        })
        .catch(erro => {
          console.log(erro)
          alert("ERRO ao criar Playlist")
        })
     
    }
    
     onChangeInput = event => {
          this.setState({ playlistDigitada: event.target.value})
      }
    
  render (){
  return (
    <AppContainer>

      <TextField
        value={this.state.playlistDigitada}
        type="text"
        placeholder="Nova playlist"
        onChange={this.onChangeInput}
      />
      <Button 
      variant="outlined"
      color="primary"
      onClick={this.criaPlaylist}>Salvar Playlist</Button>
      
    </AppContainer>
  )}
}

export default CriaPlayList;


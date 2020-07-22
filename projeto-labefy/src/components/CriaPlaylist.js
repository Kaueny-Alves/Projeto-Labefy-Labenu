import React from 'react';
import axios from "axios";


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
    <div>

      <input
        value={this.state.playlistDigitada}
        type="text"
        onChange={this.onChangeInput}
      />
      <button onClick={this.criaPlaylist}>Salvar Playlist</button>
      
    </div>
  )}
}

export default CriaPlayList;


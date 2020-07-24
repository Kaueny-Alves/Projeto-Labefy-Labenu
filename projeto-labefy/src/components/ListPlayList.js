import React from "react";
import axios from "axios";
import styled from "styled-components";

const DeletePlayList = styled.span`
  cursor: pointer;
  color: red;
`;

const PlayList = styled.li`
  cursor: pointer;
  color: blue;
`;

class ListPlayList extends React.Component {
  state = {
    list: [],
    name: "",
    artist: "",
    url: "",
  };

  componentDidMount() {
    this.fetchPlayList();
  }

  fetchPlayList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            authorization: "kaueny-alves-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ list: response.data.result.list });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  handleDeletePlayList = (playLisId) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playLisId}`,
          {
            headers: {
              authorization: "kaueny-alves-mello",
            },
          }
        )
        .then((response) => {
          alert(" apagado com sucesso.");
          this.fetchPlayList();
        })
        .catch((erro) => {
          console.log(erro);
          alert("ERRO AO APAGAR");
        });
    }
  };

  searchPlayList = (namePlaylist) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${namePlaylist}`,

        {
          headers: {
            authorization: "kaueny-alves-mello",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.length === 0 && <div>Carregando...</div>}
          {this.state.list.map((play) => {
            return (
              <PlayList onClick={() => this.searchPlayList(play.name)}>
                {" "}
                {play.name}
                <DeletePlayList
                  onClick={() => this.handleDeletePlayList(play.id)}
                >
                  X
                </DeletePlayList>
              </PlayList>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPlayList;

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 300,
    height: 300,
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

const DeletePlayList = styled.span`
  cursor: pointer;
  color: red;
`;

const PlayList = styled.li`
  cursor: pointer;
  color: blue;
`;

export default function ListPlayList() {
  const classes = useStyles();
  const [list, setList] = useState("");
  const [musicaDigitada, setMusicaDigitada] = useState("");
  const [artistaDigitado, setArtistaDigitado] = useState("");
  const [urlDigitada, setUrlDigitada] = useState("");

  //const componentDidMount() {
  //   this.fetchPlayList();
  // }

  const fetchPlayList = () => {
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
        setList(response.data.result.list);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleDeletePlayList = (playLisId) => {
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
          fetchPlayList();
        })
        .catch((erro) => {
          console.log(erro);
          alert("ERRO AO APAGAR");
        });
    }
  };

  const searchPlayList = (namePlaylist) => {
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

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
         
            lista playLis
          
        </CardContent>
      </div>
    </Card>
  );
}

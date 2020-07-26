import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { axiosConfig, baseUrl } from "./api";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import { ListItemText, ListItemIcon, withStyles, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 300,
    height: 300,
    marginTop: 15,
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
  

}));


const StyledMenuItem = withStyles((theme) => ({
  play: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function ListPlayList() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [playlistId, setPlaylisId] = useState([]);

  useEffect(() => {
    fetchPlayList();
  }, []);

  const fetchPlayList = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        console.log(response.data.result.list);
        setList(response.data.result.list);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleDelete = (playLisId) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(`${baseUrl}/${playLisId}`, axiosConfig)
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

        axiosConfig
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
          {list.map((playlist) => {
            return (
             
                <StyledMenuItem>
                <ListItemIcon>
                  <PlaylistPlay
                    key={playlist.id}
                    color="secondary"
                    fontSize="small"
                  />
                  </ListItemIcon>
                  <ListItemText primary={ playlist.name}/>
                  <ListItemIcon>
                  <DeleteOutlined 
                  color="secondary"
                  fontSize="small"
                  onClick={() => handleDelete(playlist.id)}
                  /> 
                  </ListItemIcon>
                   </StyledMenuItem>
            );
          })}
        </CardContent>
      </div>
    </Card>
  );
}

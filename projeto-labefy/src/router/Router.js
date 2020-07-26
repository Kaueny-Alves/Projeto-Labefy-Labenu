import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import CriaPlayList from "../components/CriaPlaylist";
import DetalhesPlayList from "../components/DetalhesPlaylist";
import AdicionaMusicaPlayList from "../components/AdicionaMusicaPlayList";
import ListPlayList from "../components/ListPlayList";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import styled from "styled-components";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #3f51b5;
`;

export const Router = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      <BrowserRouter>
      <AppContainer>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Open Menu
          </Button>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledLink to="/criaplay">
              <StyledMenuItem>
                <ListItemIcon>
                  <PlaylistAddIcon  
                  color="primary"
                  fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Criar Playlist" />
              </StyledMenuItem>
            </StyledLink>

            <StyledLink to="/musica">
              <StyledMenuItem>
                <ListItemIcon>
                  <QueueMusicIcon 
                  color="primary"
                  fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Criar Música" />
              </StyledMenuItem>
            </StyledLink>

            <StyledLink to="/playlist">
              <StyledMenuItem>
                <ListItemIcon>
                  <PlaylistPlayIcon 
                  color="primary"
                  fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Lista de Playlist" />
              </StyledMenuItem>
            </StyledLink>

            <StyledLink to="/listaplay">
              <StyledMenuItem>
                <ListItemIcon>
                  <PlaylistAddCheckIcon 
                  color="primary"
                  fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Detalhes da Playlist" />
              </StyledMenuItem>
            </StyledLink>
          </StyledMenu>
        </div>
        
          <Switch>
            <Route path="/criaplay">
              {/* O que será renderizado quando a rota for "/sobre" */}
              <CriaPlayList />
            </Route>
            <Route path="/playlist">
              {/* O que será renderizado quando a rota for "/sobre" */}
              <DetalhesPlayList />
            </Route>
            <Route path="/musica">
              {/* O que será renderizado quando a rota for "/"" */}
              <AdicionaMusicaPlayList />
            </Route>
            <Route path="/listaplay">
              {/* O que será renderizado quando a rota for "/"" */}
              <ListPlayList />
            </Route>
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

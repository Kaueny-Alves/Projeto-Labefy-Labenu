import React from 'react';
import CriaPlayList from "./components/CriaPlaylist";
import ListPlayList from "./components/ListPlayList"
import AdicionaMusicaPlayList from "./components/AdicionaMusicaPlayList"


class App extends React.Component {
 
  

  render (){
  return (
    <div>
  <CriaPlayList />
  <ListPlayList />
  <AdicionaMusicaPlayList/>

    </div>
  )}
}

export default App;

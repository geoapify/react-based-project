import React from 'react';
import './App.scss';
import MyMap from './components/my-map';

function App() {

  const mapIsReadyCallback = (map) => {
    console.log(map);
  };

  return (
    <MyMap mapIsReadyCallback={mapIsReadyCallback}/>
  );
}

export default App;

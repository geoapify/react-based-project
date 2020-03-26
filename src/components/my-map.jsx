import React, { useEffect } from 'react'; 
import './my-map.scss';

function MyMap() {

  useEffect(() => {
    console.log('This is called when the component is mounted!');
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <div className="map-container">
      <div className="placeholder">
        <span className="placeholder-text">The map will be displayed here</span>
      </div>
    </div>
  )
}

export default MyMap;
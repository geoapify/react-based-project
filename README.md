## React-based project skeleton for a map application by [Geoapify](https://www.geoapify.com)
* The project was created with [Create React App](https://github.com/facebook/create-react-app).
* The project uses [Sass3 - .scss](https://sass-lang.com/documentation/syntax) CSS pre-processor.

## Run the application
1. [Clone or download](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the source code of the application to your computer.
2. Install Node.js if not installed [from Download page](https://nodejs.org/en/download/) or [via package manager](https://nodejs.org/en/download/package-manager/).
3. Go to the application directory.
4. Run `npm install`.
5. Run `npm start`.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will be reloaded automatically when you make changes to the project.

**The page contains only one phrase "The map will be displayed here", that we replace now with a map.**

## Geoapify Map Tiles
Geoapify offers vector and raster map tiles of different styles and colors. 

We use Mapbox style specification that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. 

Visit our documentation page for [Map Tiles](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) to get a map style link for a map.

## Geoapify API key
You will require Geoapify API Key to display a map. Register and get an API key for free on [Geoapify MyProjects](https://myprojects.geoapify.com).

We have a Freemium pricing model. Start using our services now for FREE and extend when you need.

## Text editor
You can use any text editor for writing HTML, CSS, and JavaScript. However, we recommend you try [Visual Studio Code](https://code.visualstudio.com).

# Display a map with Mapbox GL
1. Go to the application directory.
2. Run `npm install mapbox-gl` to install Mapbox GL library.
3. Add Mapbox GL styles to the index.scss:
```css
@import '~mapbox-gl/dist/mapbox-gl.css';
```
4. Add code to the src/components/my-map.jsx:
```javascript
import React, { useEffect } from 'react'; 
import './my-map.scss';
import mapboxgl from 'mapbox-gl';

function MyMap() {
  let mapContainer;

  const initialState = {
    lng: 11,
    lat: 49,
    zoom: 4
  };

  useEffect(() => {
    const myAPIKey = YOUR_API_KEY_HERE; 

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
      });

  }, []);

  return (
    <div className="map-container" ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;
```
5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).

# Display a map with Leaflet

# Display a map with OpenLayers

## Build the application
Run `npm run build` from the application directory.<br />
This builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### More options
You can learn about more build options in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


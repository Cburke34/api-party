import React, { Component } from 'react'

import './GoogleMap.css'

class GoogleMap extends Component {
  constructor() {
    super ()

    function initMap() {
        const uluru = {lat: -25.363, lng: 131.044};
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        const marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
  }

    render() {
    return (

<div>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0" />
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5WncMSzY2nUi84Ad5MWAeHQ-G4xDjAyQ&callback=initMap"
    async defer></script>
  </body>
  </div>

        )
    }
}

export default Map
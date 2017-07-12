import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import './GoogleMap.css'

class GoogleMap extends Component {
constructor(props) {
    super(props)

    this.fetchMapData(props)
  }

  fetchMapData = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAHaMbOXL-4mm3PTNaErde9BmDxUX6YopU")
    .then(response => response.json())
    .then (console.log('hello'))
  }

    render() {
    return (
      <div className="googleMap">
        <img 
          className="googleMap-logo" 
          src="http://vectorlogo4u.com/wp-content/uploads/2015/09/google-maps-vector-720x340.png"
          alt="googleMap logo"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input className= "GoogleMap"
              type="text"
            />
          </div>
          <div>
            <button type="submit">Find Location</button>
          </div>
        </form>
        <Route path="/:maps/:api" render={() => <p>Something is happening</p>} />
      </div>
        )
    }
}

export default GoogleMap
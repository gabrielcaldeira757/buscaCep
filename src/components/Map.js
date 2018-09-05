import {
  default as React,
  Component,
} from "react";



import { 
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

const InitialMap = withGoogleMap(props => {

const markers = props.markers;


return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
      onClick={props.onMapClick}
     >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => props.onMarkerClick(marker)}
        >
          {marker.showInfo && (
            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
              {
                marker.imageUrl ? <div id="infowindow"><img src = {marker.imageUrl}/><p id="description">{marker.content}</p></div> : <div>{marker.content}</div>
              }
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  )
});

export default InitialMap;
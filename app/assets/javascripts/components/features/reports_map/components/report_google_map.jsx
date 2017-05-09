import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

export const ReportGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
)));

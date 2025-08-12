import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/Place';
import type {Map as LeafletMap} from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useEffect, useRef } from 'react';

interface MapProps {
  place: Place | null;
}

export default function LocationMap({place}: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if(mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[42.69751, 23.32415]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      {place && <Marker position={[place.latitude, place.longitude]}/>}
    </MapContainer>
  )
}
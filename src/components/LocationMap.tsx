import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/Place';
import type {Map as LeafletMap} from 'leaflet';

interface MapProps {
  place: Place | null;
}

export default function LocationMap({place}: MapProps) {
  return (
    <div>Map</div>
  )
}
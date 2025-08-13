import './App.css'
import LocationSearch from './components/LocationSearch';
import LocationMap from './components/LocationMap';
import type { Place } from './api/Place';
import { useState } from 'react';

function App() {
const [place, setPlace] = useState<Place | null>(null);
  return (
    <div className="h-screen grid grid-cols-12 justify-center">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)}/>
      </div>
      <div className="col-span-9">
        <LocationMap place={place}/>
      </div>
    </div>
  )
}

export default App

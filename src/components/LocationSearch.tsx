import { useState, type FormEvent } from 'react';
import type { Place } from '../api/Place';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({onPlaceClick}: LocationSearchProps) {
const [places, setPlaces] = useState<Place[]>([]);
const [term, setTerm] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(term);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='font-bold' htmlFor="term">Search</label>
            <input
                type="text"
                className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                id="term"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
            />
        </form>
    </div>
  )
}

import type { Place } from "./Place";

const baseUrl = 'https://nominatim.openstreetmap.org/';

interface SearchResponce {
    features: {
        geometry: {
            coordinates: number[];
        }
        properties: {
            place_id: number;
            display_name: string;
        } 
    }[]
}

export const search = async (term: string) => {
    const url = `${baseUrl}search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=7`;
    try {
        const result = await fetch(url);
        const data: SearchResponce = await result.json();
        console.log(data);
        const places: Place[] = data.features.map((feature) => {
           return { 
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0]
           }
        });
        return places;
    } catch (error) {
        console.log(error)
    }
}
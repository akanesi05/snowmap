"use client";
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function PlacesMap() {
    const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    return (
    <APIProvider apiKey={mapKey}>
    <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling='greedy'
        disableDefaultUI
    />
    </APIProvider>
    )
}


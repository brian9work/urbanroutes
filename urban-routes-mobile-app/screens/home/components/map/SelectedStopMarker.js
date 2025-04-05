import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Marker } from 'react-native-maps'
import { ContextHome } from '../../../../app/home/Context';
import images from '../../../../constants/images';

export default function SelectedStopMarker() {
    const { location, notificationValueChangue } = useContext(ContextHome);
    const [locationState, setLocationState] = location;

    return (
        <Marker
            coordinate={{
                latitude: locationState.latitude,
                longitude: locationState.longitude,
            }}
            title='Mi ubicación'
            icon={images.icons.selectedStop}
        >

        </Marker>
    )
}
import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Marker } from 'react-native-maps'
import { ContextHome } from '../../../../app/home/Context';
import images from '../../../../constants/images';

export default function SelectedStopMarker() {
    const { selectedStop } = useContext(ContextHome);

    const coordinate = useState({
        latitude: 19.41514082532041,
        longitude: -98.14024764753933,
    })

    useEffect(() => {
        coordinate[1]({
            latitude: selectedStop[0].latitude,
            longitude: selectedStop[0].longitude,
        })
    }, [selectedStop[0]])

    return (
        <Marker
            coordinate={{
                latitude: parseFloat(coordinate[0].latitude),
                longitude: parseFloat(coordinate[0].longitude),
            }}
            title='Mi ubicación'
        >
            <Image 
                source={images.icons.selectedStop}
                className="object-cover object-center"
                style={{ width: 50, height: 50, aspectRatio: 1, resizeMode: 'contain' }}
            />

        </Marker>
    )
}
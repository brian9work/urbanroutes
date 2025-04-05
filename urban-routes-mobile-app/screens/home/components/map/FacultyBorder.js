import { View, Text } from 'react-native'
import React from 'react'
import { Polygon } from 'react-native-maps'

export default function FacultyBorder() {
    return (
        <Polygon
            coordinates={[
                { latitude: 19.418324814888276, longitude: -98.12421015124512 },
                { latitude: 19.419336038579768, longitude: -98.12847113528545 },
                { latitude: 19.418073128062897, longitude: -98.12970119585708 },
                { latitude: 19.417526596174188, longitude: -98.12821372506644 },
                { latitude: 19.416904073677458, longitude: -98.12595462878743 },
            ]}
            strokeColor="rgba(136,0,0,1)"
            fillColor="rgba(190,0,0,0.4)"
            strokeWidth={5}
        />
    )
}
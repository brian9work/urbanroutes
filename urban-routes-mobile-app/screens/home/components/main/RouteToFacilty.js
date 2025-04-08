import { View, Text } from 'react-native'
import React from 'react'
import CardRoute from './routeToFacilty/CardRoute'

export default function RouteToFacilty() {
    return (
        <View className="">
            <View>
                <Text className="text-4xl font-extrabold mt-5">
                    <Text>Rumbo a la facultad: </Text>
                    <Text className="text-app-primary">
                        FCBIyT
                    </Text>
                </Text>
            </View>
            <CardRoute/>
            <CardRoute/>
            <CardRoute/>
        </View>
    )
}
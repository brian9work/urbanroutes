import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Stops({ transportStops }) {
    const destiny = transportStops.pop()
    return (
        <View className="mt-12 w-full mx-auto border-2 border-gray-300 rounded-xl pt-5">
            <View className="flex flex-row ml-5 gap-4">
                <MaterialCommunityIcons name="bus-stop-covered" size={28} color="#666" />
                <Text className="text-xl font-semibold">Paradas</Text>
            </View>
            <View className="ml-10">
                {transportStops.map((item, index) => {
                    return (
                        <RouteComponent
                            key={`routeOrigin-${index}-${item.stopId}`}
                            icon="bus-side"
                            name={item.name}
                        />
                    )
                })}
            </View>

            <View className="ml-5 flex flex-row gap-3 items-center border-b-2 border-gray-200 py-6">
                <View className="w-10 h-10 bg-app-primary rounded-full flex items-center justify-center">
                    <MaterialCommunityIcons name="bus-stop" size={25} color="#eee" />
                </View>
                <Text className="text-lg">{destiny.name}</Text>
            </View>
        </View>
    )
}

const RouteComponent = ({ icon, name, price, time }) => {
    return (
        <View className="flex flex-row gap-3 items-center border-b-2 border-gray-200 py-6">
            <View className="w-10 h-10 bg-app-primary/10 rounded-full flex items-center justify-center">
                <MaterialCommunityIcons name={icon} size={25} color="#0d6cf2" />
            </View>
            <Text className="text-lg">{name}</Text>
        </View>
    )
}
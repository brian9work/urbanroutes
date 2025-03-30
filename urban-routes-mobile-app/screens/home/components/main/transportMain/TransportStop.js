import { View, Text } from 'react-native'
import React from 'react'
import Direction from './Direction';

export default function TransportStop({ item }) {
    return (
        <View className="my-5">
            <View className="flex flex-row items-center gap-2">
                <Text className="text-2xl font-bold">{item.transportName}</Text>
                <Text className="px-3 py-1 bg-gray-200 capitalize rounded-xl text-xs">
                    {item.transportTypeOfTransportName} -
                    {item.transportLineOfTransportName}
                </Text>
            </View>

            <View className="w-full">
                <View className="">
                    {item.trayectoInfoOrigin.destination !== null &&
                        <Direction
                            id={item.trayectoInfoOrigin.id}
                            destination={item.trayectoInfoOrigin.destination}
                            price={item.trayectoInfoOrigin.price}
                            time={item.trayectoInfoOrigin.time}
                            frequency={item.transportFrequency}
                            distance={item.trayectoInfoOrigin.distance}
                            transportId={item.transportId}
                        />
                    }
                    {item.trayectoInfoDestination.destination !== null &&
                        <Direction
                            id={item.trayectoInfoDestination.id}
                            destination={item.trayectoInfoDestination.destination}
                            price={item.trayectoInfoDestination.price}
                            time={item.trayectoInfoDestination.time}
                            frequency={item.transportFrequency}
                            distance={item.trayectoInfoDestination.distance}
                            transportId={item.transportId}
                        />
                    }
                </View>
            </View>
        </View>
    )
}
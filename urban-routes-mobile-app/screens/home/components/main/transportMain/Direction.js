import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import dataMain from '../mainData'
import ContextHome from '../../../../../app/home/Context';
import { ClockIcon, MoneyIcon, RouteIcon, TransportIcon } from '../../../../../constants/Icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Direction({ id, destination, price, time, distance, transportId }) {
    const { selectedMain, selectedIdtransport, selectedDestination } = useContext(ContextHome);
    const [selectedMainState, setSelectedMainState] = selectedMain;
    const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
    const [selectedDestinationState, setSelectedDestinationState] = selectedDestination;

    return (
        <Pressable className="mt-2 bg-white border-l-4 border-l-app-primary rounded-xl p-4"
            onPress={() => {
                setSelectedIdtransportState(transportId)
                setSelectedMainState(dataMain.Transport)
                setSelectedDestinationState(id)
            }}
        >
            <View className="flex flex-row items-center justify-between">
                <View>
                    <Text className="text-app-secondary">Rumbo a:</Text>
                    <Text className="text-app-primary text-xl font-bold">{destination} #{id}</Text>
                </View>
                <View className="flex items-center justify-center w-12 h-12 bg-app-primary/10 rounded-full">
                    <MaterialCommunityIcons name="bus-articulated-front" size={24} color="#0d6cf2" />
                </View>
            </View>

            <View className="flex flex-row justify-around gap-x-2 w-full mt-5 ">
                <View className="flex flex-row items-center gap-1.5">
                    <MoneyIcon />
                    <Text className="text-lg">{price}</Text>
                </View>
                <View className="flex flex-row items-center gap-1.5">
                    <ClockIcon />
                    <Text className="text-lg">{time} m.</Text>
                </View>
                <View className="flex flex-row items-center gap-1.5">
                    <RouteIcon />
                    <Text className="text-lg">{distance} m.</Text>
                </View>
            </View>
        </Pressable>
    )
}

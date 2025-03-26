import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import dataMain from '../mainData'
import { ContextHome } from '../../../../../app/home/Context';
import { ClockIcon, MoneyIcon, RouteIcon, TransportIcon } from '../../../../../constants/Icons';

export default function Direction({ id, destination, price, time, distance, transportId }) {
    const { selectedMain, selectedIdtransport, selectedDestination } = useContext(ContextHome);
    const [selectedMainState, setSelectedMainState] = selectedMain;
    const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
    const [selectedDestinationState, setSelectedDestinationState] = selectedDestination;
    return (
        <Pressable className="mt-2 ml-2 bg-white rounded-3xl p-4"
            onPress={() => {
                setSelectedIdtransportState(transportId)
                setSelectedMainState(dataMain.Transport)
                setSelectedDestinationState(id)
            }}
        >
            <Text className="flex gap-2">Rumbo a:
            </Text>
                <Text className="font-bold">
                    {destination} - {id}
                </Text>
            <View className="flex flex-row justify-around gap-x-0.5 mt-2">

                {/* <View className="flex flex-row gap-x-2 w-10/12">
                    <View className="w-[33%] ">
                        <Text className="block text-lg text-muted-foreground">Precio</Text>
                        <Text className="text-xl font-bold">$ {price}</Text>
                    </View>
                    <View className="w-[33%] ">
                        <Text className="block text-lg text-muted-foreground">Tiempo</Text>
                        <Text className="text-xl font-bold">{time} min.</Text>
                    </View>
                    <View className="w-[33%] ">
                        <Text className="block text-lg text-muted-foreground">Distancia</Text>
                        <Text className="text-xl font-bold">{distance} Km.</Text>
                    </View>
                </View> */}

                <View className="flex flex-row gap-x-2 w-10/12 ">
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
                <View className="">
                    <TransportIcon />
                </View>
            </View>
        </Pressable>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function InformationInitial({ data, infoStopInitial }) {
    return (
        <View className="mt-5">
            <View>
                <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons name="bus-articulated-front" size={24} color="#0d6cf2" />
                    <Text className="text-base text-app-secondary">Transporte: {data.transportName}</Text>
                </View>
                <Text className="text-4xl font-extrabold mt-5">
                    <Text>Rumbo a: </Text>
                    <Text className="text-app-primary">
                        {infoStopInitial.stopToName}
                    </Text>
                </Text>
            </View>
            <View className="mt-5">
                <View className="flex justify-between flex-row mb-3">
                    <View className="w-[47%] ">
                        <BoxWhitBorder
                            tit={"Costo del pasaje:"}
                            text={"$ " + infoStopInitial.price}
                            color={"text-common-green"}
                        />
                    </View>
                    <View className="w-[47%] ">
                        <BoxWhitBorder
                            tit={"Tiempo de recorrido:"}
                            text={infoStopInitial.time + "m."}
                            color={"text-common-blue"}
                        />
                    </View>
                </View>
                <View className="mt-4">
                    <BoxWhitBorder
                        tit={"Salida cada"}
                        text={data.transportFrequency + "m."}
                        color={"text-common-orange"}
                    />
                </View>
            </View>
        </View>
    )
}

export function InformationInitialSkeleton (){
    return (
        <View className="mt-5">
            <View>
                <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons name="bus-articulated-front" size={24} color="#0d6cf2" />
                    <View className="w-32 bg-app-secondary/15 h-4 rounded-lg" />
                </View>
                <Text className="text-4xl font-extrabold mt-5">
                    <View className="w-80 bg-app-secondary/15 h-14 rounded-2xl" />
                </Text>
            </View>
            <View className="mt-5">
                <View className="flex justify-between flex-row mb-3">
                    <View className="w-[47%] h-20 bg-app-secondary/15 rounded-xl" />
                    <View className="w-[47%] h-20 bg-app-secondary/15 rounded-xl" />
                </View>
                <View className="mt-4">
                    <View className="w-full h-20 bg-app-secondary/15 rounded-xl" />
                </View>
            </View>
            <View className="mt-16">
                <View className="w-full h-40 bg-app-secondary/15 rounded-xl" />
            </View>
        </View>
    )
}

function BoxWhitBorder({ tit, text, color }) {
    return (
        <View className="flex flex-col justify-center items-center gap-1 rounded-xl border-2 border-gray-200 py-3 w-full">
            <Text className="text-sm text-app-secondary">
                {tit}
            </Text>
            <Text className={`text-3xl font-bold ${color}`}>
                {text}
            </Text>
        </View>
    )
}
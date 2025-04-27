import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import ContextHome from '../../../../app/home/Context';

export default function Reboot () {
    const { activeMenuSearch, location, originLocation } = useContext(ContextHome);

    return (
        <Pressable className="flex flex-row bg-white items-center mb-5 py-4 rounded-3xl border-2 border-gray-200"
            onPressOut={() => {
                location[1](originLocation[0])
                activeMenuSearch[1](false)
            }}
        >
            <View className="w-[20%] flex justify-center items-center">
                <View className=" bg-app-primary/10 p-4 rounded-full">
                    <Ionicons name="location-outline" size={28} color="#0d6cf2" />
                </View>
            </View>
            <View className="w-[65%]">
                <Text className="font-bold text-xl">Mi ubicacion</Text>
            </View>
            <View className="w-[15%] ">
                <AntDesign name="arrowright" size={24} color="#333" />
            </View>
        </Pressable>
    )
}
import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import ContextHome from '../../../../app/home/Context';

export default function ComponentFacultades ({ facultad, dataMain }) {
    const { activeMenuSearch, location, selectedMain, activeMenu } = useContext(ContextHome);
    return (
        <Pressable className="flex flex-row bg-white items-center mb-2 py-4 rounded-3xl border-2 border-gray-200"
            onPressOut={() => {
                location[1]({
                    latitude: parseFloat(facultad.latitude),
                    longitude: parseFloat(facultad.longitude),
                    distance: 500
                })
                activeMenuSearch[1](false)
                activeMenu[1](false)
                selectedMain[1](dataMain)
            }}
        >
            <View className="w-[20%] flex justify-center items-center">
                <View className=" bg-app-primary/10 p-4 rounded-full">
                    <Ionicons name="school-outline" size={28} color="#0d6cf2" />
                </View>
            </View>
            <View className="w-[65%]">
                <Text className="font-bold text-xl">{facultad.name}</Text>
                <View className="bg-app-primary/10 rounded-xl w-20 mt-2">
                    <Text className="text-app-primary text-center text-sm ">{facultad.acronym}</Text>
                </View>
            </View>
            <View className="w-[15%] ">
                <AntDesign name="arrowright" size={24} color="#333" />
            </View>
        </Pressable>
    )
}
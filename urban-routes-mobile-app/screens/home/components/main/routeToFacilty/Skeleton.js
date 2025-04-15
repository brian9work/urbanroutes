import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { ClockIcon, MoneyIcon, RouteIcon } from '../../../../../constants/Icons'
import { PrimaryButton } from '../../../../../components/common/Buttom'

export default function Skeleton() {
    return (
        <Pressable className=" mt-5 bg-white rounded-3xl border-2 border-gray-200">
            <View className="flex flex-row items-center gap-x-3 w-11/12 mx-auto mt-3">
                <View className="flex justify-center items-center w-12 h-12 bg-app-primary/10 rounded-full">
                </View>
                <View className="w-52 bg-gray-100 h-7 rounded-2xl "></View>
            </View>
            <View className="">
                <View className="bg-gray-50 w-11/12 mx-auto rounded-2xl p-4 flex gap-y-2 mt-3">
                    <View className="w-72 bg-gray-200 h-7 rounded-2xl "></View>
                    <View className="w-52 bg-gray-200 h-7 rounded-2xl "></View>
                </View>
                <View className="flex flex-row justify-around gap-x-2 w-full mt-5 ">
                    <View className="rounded-full bg-green-100 w-12 h-12"></View>
                    <View className="rounded-full bg-blue-100 w-12 h-12"></View>
                    <View className="rounded-full bg-yellow-100 w-12 h-12"></View>
                </View>
                <View className="w-full h-12 bg-app-primary/10 rounded-3xl mt-5"></View>
            </View>
        </Pressable>
    )
}
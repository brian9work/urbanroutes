import { View, Text } from 'react-native'
import React from 'react'

export default function Skeleton() {
    return (
        <View
            className="flex flex-row justify-between items-center gap-2 py-4 border-b border-gray-300"
        >
            <View className="">
                <View className="flex flex-row items-center gap-2">
                    <Text className=" bg-gray-200 w-44 rounded-xl h-8"> </Text>
                    <Text className="px-3 py-1 bg-gray-300 rounded-xl text-sm w-20"> </Text>
                </View>
                <View className="w-full flex flex-row justify-between items-center">
                    <View className="w-10/12 ">
                        <View className="mt-2 ml-2">
                            <Text className="bg-gray-200 w-32 h-4 rounded-xl "> </Text>
                            <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                                <View className="flex flex-row gap-x-2 ml-2 items-center">
                                    <View className="bg-common-green/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-common-blue/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-yellow-200/30 p-5 rounded-full"></View>
                                </View>
                            </View>
                        </View>
                        <View className="mt-2 ml-2">
                            <Text className="bg-gray-200 w-32 h-4 rounded-xl "> </Text>
                            <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                                <View className="flex flex-row gap-x-2 ml-2 items-center">
                                    <View className="bg-common-green/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-common-blue/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-yellow-200/30 p-5 rounded-full"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="">
                        <View className="bg-gray-200 p-6 rounded-full"></View>
                    </View>
                </View>
            </View>
        </View>
    )
}
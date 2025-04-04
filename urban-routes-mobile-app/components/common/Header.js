import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router';

export default function Header({ text = "Menu", children }) {
    const router = useRouter();
    return (
        <View className="pt-10 ">
            <View className="px-5 py-5 border-b-4 border-app-primary bg-white">
                <View className="flex flex-row justify-between items-center">
                    <Pressable className="flex flex-row items-center gap-3"
                        onPressOut={() => {
                            router.push("/home")
                        }}
                    >
                        <Octicons name="arrow-left" size={24} color="black" />
                        <Text className=" text-app-primary font-bold text-3xl">{text}</Text>
                    </Pressable>
                    <View className="
                    flex items-center justify-center 
                    rounded-full"
                    >
                        {children}
                    </View>
                </View>
            </View>
        </View>
    )
}
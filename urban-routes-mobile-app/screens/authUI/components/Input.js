import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({label="label", placeholder="placeholder", password=false}) {
    return (
        <View className="w-10/12 mx-auto mt-5">
            <Text className="text-white text-xl" >{label}</Text>
            <TextInput
                secureTextEntry={password}
                placeholder={placeholder}
                placeholderTextColor={'#fff9'}
                className="w-full mt-1 px-5 py-3 bg-black/60 rounded-lg text-lg color-white"
            />
        </View>
    )
}
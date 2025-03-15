import { View, Text, Alert } from 'react-native'
import React from 'react'
import Buttom from './Buttom'

export default function AlertUI({ title, subtitle, description, fun }) {
    return (
        <View className="absolute w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <View className="w-11/12 bg-white mx-auto z-10 p-3 rounded-lg">
                <Text className="text-center text-3xl font-extrabold uppercase">{title}</Text>
                <Text className="text-center text-xl font-semibold ">{subtitle}</Text>
                <Text className="text-lg mt-5">{description}</Text>
                <View>
                    <Buttom className="mt-5" fun={fun} >Aceptar</Buttom>
                </View>
            </View>
        </View>
    )
}

export function PrimaryAlert({ title, subtitle, description, children }) {
    return (
        <View className="absolute w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <View className="w-11/12 bg-white mx-auto z-10 p-3 rounded-2xl">
                <Text className="text-center text-3xl font-extrabold uppercase">{title}</Text>
                <Text className="text-center text-xl font-semibold ">{subtitle}</Text>
                <Text className="text-lg mt-5">{description}</Text>
                <Buttom className="mt-5"
                    fun={() => {
                        console.log("Hola")
                        Alert.alert("Hola")
                    }
                    } >Aceptar</Buttom>
            </View>
        </View>
    )
}

export function AlertForVersion({ title, subtitle, description, children }) {
    return (
        <View className="absolute w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <View className="w-11/12 bg-white mx-auto z-10 p-3 rounded-lg">
                <Text className="text-center text-sm">Nueva versión disponible:</Text>
                <Text className="text-center text-3xl font-extrabold uppercase">{title}</Text>
                <Text className="text-center text-xl font-semibold">{subtitle}</Text>
                <Text className="text-lg font-bold mt-3">Cambios:</Text>
                <Text className="text-lg">{description}</Text>
                <View>
                    {children}
                </View>
            </View>
        </View>
    )
}

export function AlertEdit({ title, subtitle, description, children }) {
    return (
        <View className="absolute w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <View className="w-11/12 bg-white mx-auto z-10 p-3 rounded-lg">
                <Text className="text-center text-3xl font-extrabold uppercase">{title}</Text>
                <Text className="text-center text-xl font-semibold ">{subtitle}</Text>
                <Text className="text-lg mt-5">{description}</Text>
                <View>
                    {children}
                </View>
            </View>
        </View>
    )
}
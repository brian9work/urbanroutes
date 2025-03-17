import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Error({ message = "Error inesperado", description = "Por favor reinitente la operacion de nuevo" }) {
    return (
       <View className="flex items-center justify-center min-h-[90%] ">
          <MaterialCommunityIcons
             className="p-10 bg-red-300 rounded-full"
             name="server-off"
             size={45}
             color="black"
          />
          <Text className="text-2xl text-red-600 font-bold mt-3">{message}</Text>
          <Text className="text-xl mt-1">{description}</Text>
       </View>
    )
 }
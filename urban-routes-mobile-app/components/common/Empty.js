import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Empty({ message = "No hay resultados", description = "Por favor reinitente la operacion de nuevo" }) {
   return (
      <View className="flex items-center justify-center min-h-[90%] ">
         <FontAwesome
            className="p-10 bg-yellow-500 rounded-full"
            name="search"
            size={45}
            color="black"
         />
         <Text className="text-2xl text-yellow-500 font-bold mt-3">{message}</Text>
         <Text className="text-xl mt-1">{description}</Text>
      </View>
   )
}
import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import ContextHome from '../../app/home/Context';

export default function Empty({ message = "No hay resultados", description = "Por favor reintente la operacion de nuevo" }) {
   const { notificationValueChangue } = useContext(ContextHome);

   return (
      <View className="flex items-center justify-center min-h-[50%] w-11/12 mx-auto ">
         <FontAwesome
            className="p-10 bg-app-primary/10 rounded-full"
            name="search"
            size={45}
            color="#0d6cf2"
         />
         <Text className="text-3xl text-app-primary font-bold mt-3 text-center">{message}</Text>
         <Text className="text-xl text-app-secondary mt-1">{description}</Text>
      </View>
   )
}
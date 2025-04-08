import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { ClockIcon, MoneyIcon, RouteIcon } from '../../../../../constants/Icons'
import { PrimaryButton } from '../../../../../components/common/Buttom'

export default function CardRoute() {
   return (
      <Pressable className=" mt-5 bg-white rounded-3xl border-2 border-gray-200">
         <View className="flex flex-row justify-around items-center gap-x-3 w-11/12 mx-auto mt-3">
            <View className="flex justify-center items-center w-12 h-12 bg-app-primary/10 rounded-full">
               <MaterialCommunityIcons name="bus-stop" size={24} color="#0d6cf2" />
            </View>
            <View className="w-full ">
               <Text className=" font-semibold text-2xl">Desde: <Text className="text-app-primary ml-2">Bridgersotone</Text>
               </Text>
            </View>
         </View>
         <View className="">
            <View className="bg-gray-100 w-11/12 mx-auto rounded-2xl p-4 flex gap-y-2 mt-3">
               <View className="flex flex-row items-center gap-x-2">
                  <FontAwesome6 name="clock" size={20} color="#333" />
                  <Text className="text-app-secondary font-semibold">Frecuencia de salida: <Text className="text-app-primary/60 ml-2"> 15 Min. </Text></Text>
               </View>
               <View className="flex flex-row items-center gap-x-2">
                  <FontAwesome name="calendar-o" size={20} color="#333" />
                  <Text className="text-app-secondary font-semibold">Horario: <Text className="text-app-primary/60 ml-2"> 6:15 AM - 10:15 PM </Text></Text>
               </View>
            </View>
            <View className="flex flex-row justify-around gap-x-2 w-full mt-5 ">
               <View className="flex flex-row items-center gap-1.5">
                  <MoneyIcon />
                  <Text className="text-lg">10</Text>
               </View>
               <View className="flex flex-row items-center gap-1.5">
                  <ClockIcon />
                  <Text className="text-lg">10 min.</Text>
               </View>
               <View className="flex flex-row items-center gap-1.5">
                  <RouteIcon />
                  <Text className="text-lg">500 m.</Text>
               </View>
            </View>
            <View className="mt-5">
            <PrimaryButton>
               Seleccionar Ruta
            </PrimaryButton>
            </View>
         </View>
      </Pressable>
   )
}
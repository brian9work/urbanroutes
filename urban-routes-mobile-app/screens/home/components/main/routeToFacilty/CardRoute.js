import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { ClockIcon, MoneyIcon, RouteIcon } from '../../../../../constants/Icons'
import { PrimaryButton } from '../../../../../components/common/Buttom'
import ContextHome from '../../../../../app/home/Context'
import dataMain from '../mainData'

export default function CardRoute({ route, origin }) {
   const { selectedMain, selectedIdtransport, selectedDestination, selectedStop } = useContext(ContextHome);
   console.log(origin)

   return (
      <Pressable className=" mt-5 bg-white rounded-3xl border-2 border-gray-200"
         onPress={() => {
            selectedStop[1](
               { stopId: route.stopId }
            )
            selectedIdtransport[1](route.transportId)
            selectedMain[1](dataMain.Transport)
            selectedDestination[1](origin.stopId)
         }}
      >
         <View className="flex flex-row justify-around items-center gap-x-3 w-11/12 mx-auto mt-3">
            <View className="flex justify-center items-center w-12 h-12 bg-app-primary/10 rounded-full">
               <MaterialCommunityIcons name="bus-stop" size={24} color="#0d6cf2" />
            </View>
            <View className="w-full ">
               <Text className=" font-semibold text-2xl">Desde: <Text className="text-app-primary ml-2">{origin.name} #{origin.stopId}</Text>
               </Text>
            </View>
         </View>
         <View className="">
            <View className="bg-gray-100 w-11/12 mx-auto rounded-2xl p-4 flex gap-y-2 mt-3">
               <View className="flex flex-row items-center gap-x-2">
                  <FontAwesome6 name="clock" size={20} color="#333" />
                  <Text className="text-app-secondary font-semibold">Nombre del transporte: <Text className="text-app-primary/60 ml-2"> {route.transportName} </Text></Text>
               </View>
               <View className="flex flex-row items-center gap-x-2">
                  <FontAwesome6 name="clock" size={20} color="#333" />
                  <Text className="text-app-secondary font-semibold">Frecuencia de salida: <Text className="text-app-primary/60 ml-2"> {route.frequency} </Text></Text>
               </View>
               <View className="flex flex-row items-center gap-x-2">
                  <FontAwesome name="calendar-o" size={20} color="#333" />
                  <Text className="text-app-secondary font-semibold">Horario: <Text className="text-app-primary/60 ml-2"> - - </Text></Text>
               </View>
            </View>
            <View className="flex flex-row justify-around gap-x-2 w-full mt-5 ">
               <View className="flex flex-row items-center gap-1.5">
                  <MoneyIcon />
                  <Text className="text-lg">{route.price}</Text>
               </View>
               <View className="flex flex-row items-center gap-1.5">
                  <ClockIcon />
                  <Text className="text-lg">{route.time} min.</Text>
               </View>
               <View className="flex flex-row items-center gap-1.5">
                  <RouteIcon />
                  <Text className="text-lg">{route.distance} m.</Text>
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
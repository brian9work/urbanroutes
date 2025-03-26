import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import dataMain from '../mainData'
import { ContextHome } from '../../../../../app/home/Context';
import { StopIcon, WalkIcon } from '../../../../../constants/Icons';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

export default function Stop({ stop }) {
   const { selectedIdStop, selectedMain } = useContext(ContextHome);
   const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
   const [selectedMainState, setSelectedMainState] = selectedMain;

   // return (
   //    <Pressable
   //       className="py-3 border-b border-gray-300"
   //       onPress={() => {
   //          setSelectedIdStopState(stop.stopId)
   //          setSelectedMainState(dataMain.TransportsMain)
   //       }}
   //    >
   //       <View>
   //          <View className="">
   //             <Text className="text-2xl font-bold">
   //                {stop.stopName} #{stop.stopId}
   //             </Text>
   //          </View>
   //          <View className="w-full flex flex-row justify-between items-center">
   //             <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
   //                <View className="flex flex-row gap-x2 ml-5 items-center gap-2">
   //                   <WalkIcon />
   //                   <Text className="text-lg">
   //                      a <Text className="text-lg font-bold">
   //                         {parseFloat(stop.distance).toFixed(0)}
   //                      </Text> m.
   //                   </Text>
   //                </View>
   //             </View>
   //             <View className="flex items-center">
   //                <StopIcon />
   //             </View>
   //          </View>
   //       </View>
   //    </Pressable>
   // )

   const distance = parseFloat(stop.distance).toFixed(0)

   return (
      <Pressable className="rounded-3xl bg-white p-3 mb-5"
         onPress={() => {
            setSelectedIdStopState(stop.stopId)
            setSelectedMainState(dataMain.TransportsMain)
         }}
      >
         <View className="flex flex-row  items-center ">
            <View className="w-[20%] flex justify-center items-center ">
               <View className="p-4 rounded-full bg-app-primary/10 mr-4">
                  <Feather name="send" size={24} color="#0d6cf2" />
               </View>
            </View>
            <View className="w-[78%] ">
               <View className="flex flex-row justify-between items-center">
                  <Text className="text-2xl font-bold max-w-[90%]">{stop.stopName} #{stop.stopId}</Text>
                  <AntDesign name="arrowright" size={24} color="#333" />
               </View>
               <View className="flex flex-row justify-between items-center mt-4">
                  <Text className="text-lg text-app-secondary">Distancia a pie</Text>
                  <Text className="text-xl font-semibold">{distance} m</Text>
               </View>
               <View className="relative h-4 rounded-xl overflow-hidden mt-2">
                  <View className="absolute left-0 top-0 bg-gray-200 w-full h-4"></View>
                  <View 
                     className={"absolute left-0 top-0 bg-app-primary h-4"}
                     style={{width: `${Math.floor(distance*0.1)}%`}}></View>
               </View>

               <View className="flex flex-row justify-between items-center gap-3 mt-3">
                  <View>
                     <FontAwesome5
                        name="walking"
                        size={16}
                        color="#999"
                     />
                  </View>
                  <View>
                     <Text className="text-app-secondary">~{Math.floor((distance*60)/1000)} min. caminando</Text>
                  </View>
               </View>
            </View>
         </View>
      </Pressable>
   )
}
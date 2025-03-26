import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import dataMain from '../mainData'
import { ContextHome } from '../../../../../app/home/Context';
import { StopIcon, WalkIcon } from '../../../../../constants/Icons';

export default function Stop({stop}) {
   const { selectedIdStop, selectedMain } = useContext(ContextHome);
   const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
   const [selectedMainState, setSelectedMainState] = selectedMain;

   return (
      <Pressable
         className="py-3 border-b border-gray-300"
         onPress={() => {
            setSelectedIdStopState(stop.stopId)
            setSelectedMainState(dataMain.TransportsMain)
         }}
      >
         <View>
            <View className="">
               <Text className="text-2xl font-bold">
                  {stop.stopName} #{stop.stopId}
               </Text>
            </View>
            <View className="w-full flex flex-row justify-between items-center">
               <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                  <View className="flex flex-row gap-x2 ml-5 items-center gap-2">
                     <WalkIcon />
                     <Text className="text-lg">
                        a <Text className="text-lg font-bold">
                           {parseFloat(stop.distance).toFixed(0)}
                        </Text> m.
                     </Text>
                  </View>
               </View>
               <View className="flex items-center">
                  <StopIcon />
               </View>
            </View>
         </View>
      </Pressable>
   )
}
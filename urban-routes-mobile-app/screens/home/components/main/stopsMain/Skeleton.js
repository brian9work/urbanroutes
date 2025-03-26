import { View, Text } from 'react-native'
import React from 'react'

export default function Skeleton() {
   return (
      <View className="py-3 border-b border-gray-300" >
         <View>
            <View className="bg-gray-200 w-44 rounded-xl h-8">
               <Text className="text-2xl font-bold"></Text>
            </View>
            <View className="w-full flex flex-row justify-between items-center">
               <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                  <View className="flex flex-row gap-x2 ml-5 items-center gap-2">
                     <View className="bg-common-blue/15 p-5 rounded-full"></View>
                     <View className="bg-gray-200 w-44 rounded-xl h-6"></View>
                  </View>
               </View>
               <View className="flex items-center">
                  <View className="bg-gray-200 p-5 rounded-full"></View>
               </View>
            </View>
         </View>
      </View>
   )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import Octicons from '@expo/vector-icons/Octicons';

export default function PickerComponent({ text, stops, states, selectedStop }) {
   const [value, setValue] = states
   return (
      <View className=" mt-4">
         <Text className="text-lg font-medium mb-1">{text} </Text>
         <View className="flex flex-row items-center border-2 ps-4 border-gray-200 bg-white rounded-xl">
            <Octicons name="location" size={24} color="black" />
            <View className="w-11/12 ">
               <Picker
                  selectedValue={value}
                  onValueChange={(itemValue) => {
                     selectedStop[1]({
                        name: stops.find((stop) => stop.id === itemValue).name,
                        latitude: stops.find((stop) => stop.id === itemValue).latitude,
                        longitude: stops.find((stop) => stop.id === itemValue).longitude,
                     })
                     setValue(itemValue)
                  }
                  }
               >
                  {stops.map((stop, index) => {
                     return <Picker.Item
                        key={index}
                        label={"#" + stop.id + " " + stop.name}
                        value={stop.id}
                     />;
                  })}
               </Picker>
            </View>
         </View>
      </View>
   )
}
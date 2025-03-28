import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { ContextHome } from '../../../../../app/home/Context';
import dataMain from '../mainData'
import { Entypo } from '@expo/vector-icons';

export default function RestartMain() {
   const { selectedMain, infoOfTransport, activeMenu } = useContext(ContextHome);
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [infoOfTransportState, setInfoOfTransportState] = infoOfTransport;
   const [activeMenuState, setActiveMenuState] = activeMenu;

   return (
      <Pressable
         className="z-20"
         onPressOut={() => {
            if (selectedMainState === dataMain.Transport) {
               setSelectedMainState(dataMain.TransportsMain)
               setInfoOfTransportState({ route: [] })
            } else if (selectedMainState === dataMain.TransportsMain) {
               setSelectedMainState(dataMain.BusesMain)
            } else {
               setActiveMenuState(!activeMenuState)
            }
         }}
      >
         <View className={`
          absolute left-0 -top-20 
          flex items-center justify-center 
          bg-black w-12 h-12 
          rounded-full
       `}>
            <Entypo
               name="chevron-left"
               size={24}
               color="#eee"
            />
         </View>
      </Pressable>
   )
}
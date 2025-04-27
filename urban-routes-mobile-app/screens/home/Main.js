import { View, Text, Pressable, ScrollView, BackHandler } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ContextHome from '../../app/home/Context'
import TransportsMain from './components/main/TransportsMain';
import Transport from './components/main/Transport';
import dataMain from './components/main/mainData'
import StopsMain from './components/main/StopsMain';
import HiddenMenu from './components/main/buttons/HiddenMenu';
import RestartMain from './components/main/buttons/RestartMain';
import RouteToFacilty from './components/main/RouteToFacilty';

export default function Main() {
   const { selectedMain, activeMenu } = useContext(ContextHome);
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [activeMenuState, setActiveMenuState] = activeMenu;

   return (
      <View className={`
         w-full
         ${!activeMenuState ? 'top-[420]' : 'top-[850]'}
         bg-gray-100 mx-auto
         min-h-[33rem]
         px-5 pt-5 pb-2
         rounded-tl-[2.5rem] rounded-tr-[2.5rem]
         absolute
         `}>
         <HiddenMenu />
         <RestartMain />
         <ScrollView 
            className="h-96"
         >
            <SelectedMainComponent selected={selectedMainState} />
         </ScrollView>
      </View>
   )


}

const SelectedMainComponent = ({ selected }) => {
   if (selected === dataMain.BusesMain) {
      return <View className="pb-96"><StopsMain /></View>
   }
   if (selected === dataMain.TransportsMain) {
      return <View className="pb-96"><TransportsMain /></View>
   }
   if (selected === dataMain.Transport) {
      return <View className="pb-96"><Transport /></View>
   }
   if (selected === dataMain.RouteToFacilty) {
      return <View className="pb-96"><RouteToFacilty /></View>
   }
   else {
      return <View><Text>Error Menu no seleccionado</Text></View>
   }
} 
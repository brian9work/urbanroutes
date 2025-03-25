import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContextHome } from '../../app/home/Context'
import TransportsMain from './components/main/TransportsMain';
import Transport from './components/main/Transport';
import dataMain from './components/main/mainData'
import StopsMain from './components/main/StopsMain';
import BtnActiveMenu from './components/main/BtnActiveMenu';
import HiddenMenu from './components/main/buttons/HiddenMenu';
import RestartMain from './components/main/buttons/RestartMain';

export default function Main() {
   const { selectedMain, activeMenu } = useContext(ContextHome);
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [activeMenuState, setActiveMenuState] = activeMenu;

   useState(() => { }, [activeMenuState])

   return (
      <View className={`
         w-full
         ${!activeMenuState ? 'mt-[30rem]' : 'mt-[65rem]'}
         bg-gray-50 mx-auto
         min-h-[33rem]
         px-5 pt-5 pb-2
         rounded-tl-[2.5rem] rounded-tr-[2.5rem]
         relative
         `}>
         <HiddenMenu />
         <RestartMain />
         <ScrollView>
            <SelectedMainComponent selected={selectedMainState} />
         </ScrollView>
      </View>
   )


}

const SelectedMainComponent = ({ selected }) => {
   if (selected === dataMain.BusesMain) {
      return <StopsMain />
   }
   if (selected === dataMain.TransportsMain) {
      return <TransportsMain />
   }
   if (selected === dataMain.Transport) {
      return <Transport />
   }
   else {
      return <View><Text>Error</Text></View>
   }
} 
import { View, Text, BackHandler } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Map from '../../screens/home/Map'
import Main from '../../screens/home/Main'
import Search from '../../screens/home/Search';
import { Notification } from '../../components/common/Notifications';
import dataMain from '../../screens/home/components/main/mainData'
import LinkToConfig from '../../screens/home/components/main/buttons/LinkToConfig'
import ContextHome from './Context';


export default function index() {
   const { selectedMain, infoOfTransport, activeMenu, activeMenuSearch } = useContext(ContextHome);
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [infoOfTransportState, setInfoOfTransportState] = infoOfTransport;
   const [activeMenuState, setActiveMenuState] = activeMenu;
   const [activeMenuSearchState, setActiveMenuSearchState] = activeMenuSearch

   useEffect(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
         if (activeMenuSearchState === true) {
            setActiveMenuSearchState(!activeMenuSearchState)
            return true;
         }


         if (selectedMainState === dataMain.Transport) {
            setSelectedMainState(dataMain.TransportsMain)
            setInfoOfTransportState({ route: [] })
            return true;
         }

         if (selectedMainState === dataMain.TransportsMain) {
            setSelectedMainState(dataMain.BusesMain)
            return true;
         }

         if (selectedMainState === dataMain.RouteToFacilty ){
            setSelectedMainState(dataMain.BusesMain)
            return true;
         }

         if (selectedMainState === dataMain.BusesMain) {
            if (activeMenuState === false) setActiveMenuState(!activeMenuState)
            return true;
         }

         return true;
      });

      return () => backHandler.remove();
   }, [selectedMainState, activeMenuSearchState])

   return (
      <View>
         <Search />
         <Map />
         <Main />
         <LinkToConfig />
      </View>
   )
}
import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { PrimaryButton } from '../../../../../components/common/Buttom';
import PickerComponent from './PickerComponent';
import { ClockIcon, MoneyIcon, RouteIcon } from '../../../../../constants/Icons';
import GET from '../../../../../hooks/GET';
import Api from '../../../../../services/api';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Pickers({ stops }) {
   const [selectedOpcionValueFrom, setSelectedOpcionValueFrom] = useState(stops[0].id);
   const [selectedOpcionValueTo, setSelectedOpcionValueTo] = useState(stops[stops.length - 1].id);

   const [info, setInfo] = useState({
      price: " --- ",
      distance: " --- ",
      time: " --- "
   });

   const calculate = async () => {
      if (selectedOpcionValueFrom === selectedOpcionValueTo) {
         Alert.alert("Error", "El origen y el destino no pueden ser iguales.")
         return
      }

      const response = await GET(Api.stopRoutes.getStopRouteFromAndTo(
         selectedOpcionValueFrom,
         selectedOpcionValueTo
      ), "json")


      if (!response) {
         console.warn("Error al obtener las informacion entre las bases.")
         return
      }

      setInfo({
         price: response.price,
         distance: response.distance,
         time: response.time
      })

   }

   useEffect(() => {
      calculate()
   }, [])


   return (
      <View className="mt-12 w-full mx-auto border-t-8 border-t-app-primary rounded-xl pt-5">
         <View className="w-11/12 mx-auto">
            <View className="flex flex-row items-center gap-2">
               {/* <Ionicons name="search" size={24} color="#0d6cf2" /> */}
               <FontAwesome5 name="search" size={24} color="#0d6cf2" />
               <Text className="text-xl font-semibold">Buscador de transporte Publico </Text>
            </View>
            <PickerComponent
               text="Origen"
               stops={stops}
               states={[selectedOpcionValueFrom, setSelectedOpcionValueFrom]}
            />
            <PickerComponent
               text="Destino"
               stops={stops}
               states={[selectedOpcionValueTo, setSelectedOpcionValueTo]}
            />

            <View className="flex flex-row gap-2 mt-8 mx-auto">
               <View className="w-[33%] ">
                  <Text className="block text-lg text-muted-foreground">Precio</Text>
                  <Text className="text-xl font-bold">$ {info.price}</Text>
               </View>
               <View className="w-[33%] ">
                  <Text className="block text-lg text-muted-foreground">Tiempo</Text>
                  <Text className="text-xl font-bold">{info.time} min.</Text>
               </View>
               <View className="w-[33%] ">
                  <Text className="block text-lg text-muted-foreground">Distancia</Text>
                  <Text className="text-xl font-bold">{info.distance} Km.</Text>
               </View>
            </View>
            <View className="mt-5">
               <PrimaryButton fun={() => {
                  calculate()
               }}>Calcular </PrimaryButton>
            </View>
         </View>
      </View>
   );
}
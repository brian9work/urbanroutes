import { View, Text, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { PrimaryButton } from '../../../../../components/common/Buttom';
import PickerComponent from './PickerComponent';
import GET from '../../../../../hooks/GET';
import Api from '../../../../../services/api';
import { ContextHome } from '../../../../../app/home/Context';

export default function Pickers({ stops }) {
   const { notificationValueChangue } = useContext(ContextHome);
   
   const [selectedOpcionValueFrom, setSelectedOpcionValueFrom] = useState(stops[0].id);
   const [selectedOpcionValueTo, setSelectedOpcionValueTo] = useState(stops[stops.length - 1].id);

   const [info, setInfo] = useState({
      price: " --- ",
      distance: " --- ",
      time: " --- "
   });

   const calculate = async () => {
      if (selectedOpcionValueFrom === selectedOpcionValueTo) {
         notificationValueChangue("El origen y el destino no pueden ser iguales", "warning")
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
                  <Text className="block text-lg text-app-secondary">Precio</Text>
                  <Text className="text-xl font-bold">$ {info.price}</Text>
               </View>
               <View className="w-[33%] ">
                  <Text className="block text-lg text-app-secondary">Tiempo</Text>
                  <Text className="text-xl font-bold">{info.time} min.</Text>
               </View>
               <View className="w-[33%] ">
                  <Text className="block text-lg text-app-secondary">Distancia</Text>
                  <Text className="text-xl font-bold">{info.distance} Km.</Text>
               </View>
            </View>
            <View className="mt-5">
               <PrimaryButton fun={() => {
                  setInfo({
                     price: "---",
                     distance: "---",
                     time: "---"
                  })
                  calculate()

               }}>Calcular </PrimaryButton>
            </View>
         </View>
      </View>
   );
}
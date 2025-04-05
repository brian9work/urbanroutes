import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api'
import GET from '../../../../hooks/GET'
import Empty from '../../../../components/common/Empty';
import Title from '../../../../components/common/Title';
import Skeleton from './stopsMain/Skeleton';
import Stop from './stopsMain/Stop';
import { FontAwesome6 } from '@expo/vector-icons';
import { ContextGlobal } from '../../../../app/ContextGlobal';

export default function StopsMain() {
   const { endPoint } = useContext(ContextGlobal)
   const { nearbyStopsData, notificationValueChangue, location } = useContext(ContextHome);
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [locationState, setLocationState] = location;

   const [loading, setLoading] = useState(true);

   const getNearbyStops = async () => {
      const response = await GET(Api.nearby.stops(
         endPoint[0],
         locationState.latitude,
         locationState.longitude,
         locationState.distance,
      ), "json")

      if (!response) {
         notificationValueChangue("No se puede obtener las bases de stops cercanas.")
         console.warn("Error al obtener las bases de stops cercanas.")
         setNearbyStopsDataState([])
         setLoading(false)
         return
      }

      setNearbyStopsDataState(response)
      setLoading(false)
   }

   useEffect(() => {
      getNearbyStops()
   }, [locationState])

   if (loading) {
      return (<>
         <Skeleton />
         <Skeleton />
         <Skeleton />
         <Skeleton />
      </>)
   }

   if (!loading && nearbyStopsDataState.length === 0) {
      return (<>
         <Title>Bases Cercanas</Title>
         <Empty
            message='Lo siento no hay bases cercanas a su ubicación'
            description='Intente moverse a otra ubicación o ampliar el radio de búsqueda'
         />
      </>)
   }

   return (
      <View className="">
         <View>
            <Text className="text-4xl font-extrabold mt-5 flex gap-3 text-app-primary">
               <View className="pr-3">
                  <FontAwesome6 name="location-crosshairs" size={20} color="#0d6cf299" />
               </View>
               <Text className="">
                  Bases Cercanas
               </Text>
            </Text>
         </View>

         <View className="mt-5">
            {nearbyStopsDataState.map((stop, index) => {
               return (
                  <Stop
                     key={`nearbyStop-${stop.latitude}-${stop.longitude}`}
                     stop={stop}
                  />
               )
            })}
         </View>
      </View>
   )
}


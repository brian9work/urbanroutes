import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api'
import GET from '../../../../hooks/GET'
import { Pressable } from 'react-native';
import dataMain from './mainData'
import { StopIcon, WalkIcon } from '../../../../constants/Icons';
import Empty from '../../../../components/common/Empty';
import Title from '../../../../components/common/Title';
import Skeleton from './stopsMain/Skeleton';
import Stop from './stopsMain/Stop';

export default function StopsMain() {
   const { nearbyStopsData, selectedIdStop, selectedMain } = useContext(ContextHome);
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;

   const [loading, setLoading] = useState(true);

   const getNearbyStops = async () => {
      const response = await GET(Api.nearby.stops(
         19.41514082532041,
         -98.14024764753933,
         500
      ), "json")

      if (!response) {
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
   }, [])

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
      <View className="pb-96">
         <Title>Bases Cercanas</Title>
         <View>
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


import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api';
import GET from '../../../../hooks/GET';
import Title from '../../../../components/common/Title';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Transport() {
   const { selectedIdtransport, infoOfTransport, nearbyStopsData } = useContext(ContextHome);
   const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [data, setData] = infoOfTransport;

   const [loading, setLoading] = useState(true);

   const getTransport = async () => {
      const response = await GET(Api.transport.getTransport(
         selectedIdtransportState
      ), "json")

      if (!response) {
         console.warn("Error al obtener las bases de stops cercanas.")
         setTransportsForStopDataState([])
         setLoading(false)
         return
      }
      setData(response)
      setNearbyStopsDataState(response.transportStops)
      setLoading(false)
   }


   useEffect(() => {
      getTransport()
   }, [selectedIdtransportState])

   if (loading) {
      return <Text>Cargando a #{selectedIdtransportState} Datos .. </Text>
   }

   return (
      <View>
         <View>
            <Text>Transporte #{selectedIdtransportState} </Text>
            <Title>{data.transportName}</Title>
         </View>
         <View className="mt-5">
            <View className="flex justify-between flex-row mb-3">
               <View className="w-[49%]">
                  <BoxWhitBorder
                     tit={"Costo del pasaje:"}
                     text={"$ " + data.trayectoOrigin[data.trayectoOrigin.length - 1].price}
                     color={"text-common-green"}
                  />
               </View>
               <View className="w-[49%]">
                  <BoxWhitBorder
                     tit={"Tiempo de recorrido:"}
                     text={data.trayectoOrigin[data.trayectoOrigin.length - 1].time + "m."}
                     color={"text-common-blue"}
                  />
               </View>
            </View>
            <BoxWhitBorder
               tit={"Salida cada"}
               text={data.transportFrequency + "m."}
               color={"text-common-orange"}
            />
         </View>
         <Separator />
         <View>
            <Text className="mt-8">
               Trayecto desde: <Text className="font-bold text-2xl">{data.transportOrigin}</Text>
            </Text>
            <View>
               {data.trayectoOrigin.map((item, index) => {
                  return (
                     <RouteComponent
                        key={`routeOrigin-${index}-${item.stopRouteId}`}
                        icon="bus-stop-covered"
                        from={item.stopToName}
                        price={item.price}
                        time={item.time}
                     />
                  )
               })}
            </View>
         </View>
         <View>
            <Text className="mt-8">
               Trayecto desde: <Text className="font-bold text-2xl">{data.transportDestination}</Text>
            </Text>
            <View>
               {data.trayectoDestination.map((item, index) => {
                  return (
                     <RouteComponent
                        key={`routeOrigin-${index}-${item.stopRouteId}`}
                        icon="bus-stop-covered"
                        from={item.stopToName}
                        price={item.price}
                        time={item.time}
                     />
                  )
               })}
            </View>
         </View>


         <Text>Transport: {data.transportName} jeje </Text>
      </View>
   )
}

function BoxWhitBorder({ tit, text, color }) {
   return (
      <View className="flex flex-col justify-center items-center gap-1 rounded-xl border-2 border-gray-200 py-3 w-full">
         <Text>
            {tit}
         </Text>
         <Text className={`text-3xl font-bold ${color}`}>
            {text}
         </Text>
      </View>
   )
}


const RouteComponent = ({ icon, from, price, time }) => {
   return (
      <View className="my-3 flex flex-row justify-between items-center">
         <View className="flex flex-row gap-3 items-center w-7/12">
            <MaterialCommunityIcons name={icon} size={25} color="#515151" />
            <Text className="text-lg">{from}</Text>
            {/* <Bold>
                    {from}
                </Bold> */}
         </View>
         <View className="flex flex-row gap-2 items-center">
            <View className="flex flex-row gap-0.5 items-center">
               <MaterialIcons name="attach-money"
                  size={15}
                  className="p-2 bg-common-green/15 rounded-full"
                  color="#28A745"
               />
               <Text className="text-md"> ${price}</Text>
            </View>
            <View className="flex flex-row gap-0.5 items-center">
               <MaterialCommunityIcons name="clock-time-three-outline"
                  size={15}
                  className="p-2 bg-common-blue/15 rounded-full"
                  color="#007BFF"
               />
               <Text className="text-md"> {time}m.</Text>
            </View>
         </View>
      </View>
   )
}



function Separator() {
   return (
      <View className="w-full my-4 h-0.5 bg-gray-300 rounded-md"></View>
   )
}
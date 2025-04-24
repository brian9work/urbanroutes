import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api';
import GET from '../../../../hooks/GET';
import InformationInitial from './transport/InformationInitial';
import Pickers from './transport/Pickers';
import Stops from './transport/Stops';
import { ContextGlobal } from '../../../../app/ContextGlobal';

export default function Transport() {
   const { selectedIdtransport, infoOfTransport, nearbyStopsData, selectedIdStop, selectedDestination, notificationValueChangue } = useContext(ContextHome);
   const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [selectedIdStopState, setSelectedIdStopStateState] = selectedIdStop;
   const [selectedDestinationState, setSelectedDestinationState] = selectedDestination;
   const [data, setData] = infoOfTransport;

   const [infoStopInitial, setInfoStopInitial] = useState({});

   const [loading, setLoading] = useState(true);

   const getTransport = async () => {
      const responseTransport = await GET(Api.transport.getTransportBeetwenTwoStops(
         selectedIdtransportState,
         selectedIdStopState,
         selectedDestinationState
      ), "json")

      if (!responseTransport) {
         notificationValueChangue("No se pudo obtener el transporte seleccionado.")
         console.warn("Error al obtener el transporte seleccionado.")
         setTransportsForStopDataState([])
         setLoading(false)
         return
      }

      const responseStopInitial = await GET(Api.stopRoutes.getStopRouteFromAndTo(
         selectedIdStopState,
         selectedDestinationState
      ), "json")

      if (!responseStopInitial) {
         notificationValueChangue("No se pudo obtener las bases de stops del transporte seleccionado.")
         console.warn("Error al obtener las bases de stops del transporte seleccionado.")
         setTransportsForStopDataState([])
         setLoading(false)
         return
      }

      setData(responseTransport)
      setNearbyStopsDataState(responseTransport.transportStops)
      setInfoStopInitial(responseStopInitial)
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
         <InformationInitial data={data} infoStopInitial={infoStopInitial} />
         <Pickers stops={data.allStops} />
         <Stops transportStops={data.transportStops} />
      </View>
   )
}


function Separator() {
   return (
      <View className="w-full my-4 h-0.5 bg-gray-300 rounded-md"></View>
   )
}
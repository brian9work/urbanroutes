import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api';
import GET from '../../../../hooks/GET';
import Title from '../../../../components/common/Title';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import InformationInitial from './transport/InformationInitial';
import Pickers from './transport/Pickers';
import Stops from './transport/Stops';

export default function Transport() {
   const { selectedIdtransport, infoOfTransport, nearbyStopsData, selectedIdStop, selectedDestination } = useContext(ContextHome);
   const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [selectedIdStopState, setSelectedIdStopStateState] = selectedIdStop;
   const [selectedDestinationState, setSelectedDestinationState] = selectedDestination;
   const [data, setData] = infoOfTransport;

   const [infoStopInitial, setInfoStopInitial] = useState({});

   const [loading, setLoading] = useState(true);

   const getTransport = async () => {
      const responseTransport = await GET(Api.transport.getTransportBeetwenTwoStops(
         selectedIdtransportState, selectedIdStopState, selectedDestinationState
      ), "json")

      if (!responseTransport) {
         console.warn("Error al obtener el transporte seleccionado.")
         setTransportsForStopDataState([])
         setLoading(false)
         return
      }

      const responseStopInitial = await GET(Api.stopRoutes.getStopRouteFromAndTo(
         selectedIdStopState, selectedDestinationState
      ), "json")

      if (!responseStopInitial) {
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
         <Separator />
         <Separator />
      </View>
   )
}


function Separator() {
   return (
      <View className="w-full my-4 h-0.5 bg-gray-300 rounded-md"></View>
   )
}
import { View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Dim from '../../constants/dimensions';
import ContextHome from '../../app/home/Context';
import MyLocation from './components/map/MyLocation';
import NearbyStops from './components/map/NearbyStops';
import NearbyStopsForFaculty from './components/map/NearbyStopsForFaculty';
import FacultyBorder from './components/map/FacultyBorder';
import RouteSelected from './components/map/RouteSelected';
import SelectedStopMarker from './components/map/SelectedStopMarker';
import SearchPublicTransportMarker from './components/map/SearchPublicTransportMarker';
import MapStyle from './components/map/MapStyle';


export default function Map() {
   const { nearbyStopsData, infoOfTransport, notificationValueChangue, originLocation, facultiesData } = useContext(ContextHome);
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [dataTransportState, setDataTransportState] = infoOfTransport;

   const dimensions = Dim();

   useEffect(() => {
      if (nearbyStopsDataState.length === 0) {
         notificationValueChangue("Buscando bases de stops cercanas.", "info")
      }
   }, [nearbyStopsDataState, dataTransportState])


   return (
      <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}>
         <View style={{ flex: 1 }}>
            <MapView
               provider={PROVIDER_GOOGLE}
               style={{ width: dimensions.width, height: dimensions.height * 1.1 }}
               initialRegion={{
                  // latitude: 19.415168098195434,
                  // longitude: -98.14026486519624,
                  latitude: originLocation[0].latitude,
                  longitude: originLocation[0].longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
               }}
               customMapStyle={MapStyle}
               showsUserLocation={true}
               showsMyLocationButton={true}
            >
               {
                  nearbyStopsDataState.length === 0 ? (
                     <></>
                  ) : (
                     <>
                        <MyLocation />
                        <RouteSelected />
                        <NearbyStops />
                        <NearbyStopsForFaculty />
                        <FacultyBorder />
                        <SelectedStopMarker />
                        <SearchPublicTransportMarker />
                     </>
                  )
               }
            </MapView>
         </View>
      </View>
   )
}
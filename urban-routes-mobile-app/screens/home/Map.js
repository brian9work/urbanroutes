import { View, Text, Image, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, { Marker, Polygon, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import Dim from '../../constants/dimensions';
import { ContextHome } from '../../app/home/Context';
import Empty from '../../components/common/Empty';
import dataMain from './components/main/mainData'
import images from '../../constants/images';
import MyLocation from './components/map/MyLocation';
import NearbyStops from './components/map/NearbyStops';
import NearbyStopsForFaculty from './components/map/NearbyStopsForFaculty';
import FacultyBorder from './components/map/FacultyBorder';
import RouteSelected from './components/map/RouteSelected';

const MapStyle = [
   { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "off" }] },
   { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
   { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
   { "featureType": "transit", "stylers": [{ "visibility": "off" }] }
]

export default function Map() {
   const { nearbyStopsData, infoOfTransport, facultiesData } = useContext(ContextHome);
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [dataTransportState, setDataTransportState] = infoOfTransport;

   const dimensions = Dim();

   useEffect(() => {
      if (nearbyStopsDataState.length === 0) {
         console.warn("No hay bases cercanas")
      }
   }, [nearbyStopsDataState, dataTransportState])


   if (nearbyStopsDataState.length === 0) {
      return (
         <>
            <Empty
               message='Lo sentimos hay bases cercanas a su ubicación'
               description='Intente moverse a otra ubicación o ampliar el radio de búsqueda'
            />
         </>
      )
   }

   return (
      <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}>
         <View style={{ flex: 1 }}>
            <MapView
               provider={PROVIDER_GOOGLE}
               style={{ width: dimensions.width, height: dimensions.height * 1.1 }}
               initialRegion={{
                  latitude: 19.415168098195434,
                  // latitude: locationState.latitude,
                  longitude: -98.14026486519624,
                  // longitude: locationState.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
               }}
               customMapStyle={MapStyle}
               showsUserLocation={true}
               showsMyLocationButton={true}
            >
               <MyLocation />
               <RouteSelected />
               <NearbyStops />
               <NearbyStopsForFaculty />
               <FacultyBorder />
            </MapView>
         </View>
      </View>
   )
}
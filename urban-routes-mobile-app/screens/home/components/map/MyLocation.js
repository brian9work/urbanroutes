import { View, Text, Image, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import *  as Location from 'expo-location';
import ContextHome from '../../../../app/home/Context';
import { Marker } from 'react-native-maps';
import images from '../../../../constants/images';

export default function MyLocation() {
   const { location, notificationValueChangue, originLocation } = useContext(ContextHome);
   const [originLocationState, setOriginLocationState] = originLocation;
   const [locationState, setLocationState] = location;

   const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
         console.warn("Permission to access location was denied")
         Alert.alert("Permisos de ubicación", "Para poder usar la aplicación es necesario habilitar los permisos de ubicación")
         notificationValueChangue("No se pudo obtener la ubicación")
         return false
      }
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const current = {
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         distance: 500,
         accuracy: location.coords.accuracy,
      }
      setLocationState({
         // latitude: current.latitude,
         // longitude: current.longitude,
         // distance: current.distance,
         latitude: 19.415401561402106,
         longitude: -98.14000874533764,
         distance: 500,
         accuracy: current.accuracy,
      })
      setOriginLocationState({
         latitude: 19.415401561402106,
         longitude: -98.14000874533764,
         distance: 500,
         accuracy: current.accuracy,
         // latitude: current.latitude,
         // longitude: current.longitude,
         // distance: current.distance,
         // accuracy: current.accuracy,
      })
   }

   useEffect(() => {
      getLocation()
   }, [])

   return (
      <Marker
         coordinate={{
            latitude: originLocationState.latitude,
            longitude: originLocationState.longitude,
         }}
         title='Mi ubicación'
         onPress={() => {
            setLocationState(originLocationState)
         }}
      >
         <Image
            source={images.icons.location}
            className="object-cover object-center"
            style={{ width: 40, height: 40 }}
         />
      </Marker>
   )
}
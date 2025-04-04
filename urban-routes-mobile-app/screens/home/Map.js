import { View, Text, Image, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, { Marker, Polygon, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import Dim from '../../constants/dimensions';
import { ContextHome } from '../../app/home/Context';
import Empty from '../../components/common/Empty';
import dataMain from './components/main/mainData'
import images from '../../constants/images';
import MyLocation from './components/search/MyLocation';

const MapStyle = [
   { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "off" }] },
   { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
   { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
   { "featureType": "transit", "stylers": [{ "visibility": "off" }] }
]

export default function Map() {
   const { nearbyStopsData, selectedIdStop, selectedMain, infoOfTransport, location, activeMenu, notificationValue, facultiesData, notificationValueChangue } = useContext(ContextHome);
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [dataTransportState, setDataTransportState] = infoOfTransport;
   const [activeMenuState, setActiveMenuState] = activeMenu;
   const [notificationState, setNotificationState] = notificationValue;
   const [facultiesDataState, setFacultiesDataState] = facultiesData;
   const [locationState, setLocationState] = location;

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
                  latitude: locationState.latitude,
                  longitude: locationState.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
               }}
               customMapStyle={MapStyle}
               showsUserLocation={true}
               showsMyLocationButton={true}
            >

               {dataTransportState.route.length === 0 ? <></>
                  :
                  <Polyline
                     coordinates={
                        dataTransportState.route.map(c => {
                           return {
                              latitude: parseFloat(c.latitude),
                              longitude: parseFloat(c.longitude)
                           }
                        })
                     }
                     strokeColor="#0d6cf2"
                     strokeWidth={5}
                  />
               }
               <MyLocation />

               {nearbyStopsDataState.length === 0 ? <></>
                  :
                  nearbyStopsDataState.map((stop, index) => {
                     return (
                        <Marker
                           key={"marker-" + index}
                           coordinate={{
                              latitude: parseFloat(stop.latitude),
                              longitude: parseFloat(stop.longitude)
                           }}
                           title={stop.stopName + " - " + stop.stopId}
                           description={`A ${parseFloat(stop.distance).toFixed(0)} metros de ti`}
                           onPress={() => {
                              setSelectedIdStopState(stop.stopId)
                              setSelectedMainState(dataMain.TransportsMain)
                              setActiveMenuState(false)
                           }}
                           icon={images.icons.stop}
                        >

                           {/* <Image
                              source={images.icons.stop}
                              className="object-cover object-center"
                              style={{ width: 40, height: 40 }}
                           /> */}
                        </Marker>
                     )
                  })}

               {facultiesDataState.length === 0 ? <></>
                  :
                  facultiesDataState.map((faculty, index) => {
                     return (
                        <Marker
                           style={{ width: 60, height: 60 }}
                           key={"marker-faculty-" + index}
                           coordinate={{
                              latitude: parseFloat(faculty.latitude),
                              longitude: parseFloat(faculty.longitude)
                           }}
                           title={faculty.acronym}
                           description={faculty.name}
                           onPress={() => {
                           }}
                           icon={images.icons.university}
                        >

                           {/* <Image
                              source={images.icons.university}
                              // className="object-cover object-center"
                              style={{ width: 60, height: 60, aspectRatio: 1, resizeMode: 'contain'}}
                           /> */}
                        </Marker>
                     )
                  })}



               <Polygon
                  coordinates={[
                     { latitude: 19.418324814888276, longitude: -98.12421015124512 },
                     { latitude: 19.419336038579768, longitude: -98.12847113528545 },
                     { latitude: 19.418073128062897, longitude: -98.12970119585708 },
                     { latitude: 19.417526596174188, longitude: -98.12821372506644 },
                     { latitude: 19.416904073677458, longitude: -98.12595462878743 },
                  ]}
                  strokeColor="rgba(136,0,0,1)"
                  fillColor="rgba(190,0,0,0.4)"
                  strokeWidth={5}
               />
            </MapView>
         </View>
      </View>
   )
}
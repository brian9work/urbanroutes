import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import images from '../../../../constants/images';
import { Marker } from 'react-native-maps';
import dataMain from '../../components/main/mainData'

export default function NearbyStops({ }) {
   const { selectedIdStop, selectedMain, activeMenu, nearbyStopsData } = useContext(ContextHome);
   const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
   const [selectedMainState, setSelectedMainState] = selectedMain;
   const [activeMenuState, setActiveMenuState] = activeMenu;
   const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
   
    return (
        <>
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
                        >
                            <Image
                                source={images.icons.stop}
                                className="object-cover object-center"
                                style={{ width: 60, height: 60 }}
                            />
                        </Marker>
                    )
                })}
        </>
    )
}
import { View, Text, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api';
import GET from '../../../../hooks/GET';
import dataMain from '../../components/main/mainData'
import Title from '../../../../components/common/Title';
import { ClockIcon, MoneyIcon, RouteIcon, StopIcon, TransportIcon } from '../../../../constants/Icons';
import Empty from '../../../../components/common/Empty';
import TransportStop from './transportMain/TransportStop';
import Skeleton from './transportMain/Skeleton';
import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TransportsMain() {
    const { selectedIdStop, transportsForStopData, selectedMain, selectedIdtransport, selectedDestination } = useContext(ContextHome);
    const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
    const [transportsForStopDataState, setTransportsForStopDataState] = transportsForStopData;
    const [selectedMainState, setSelectedMainState] = selectedMain;
    const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
    const [selectedDestinationState, setSelectedDestinationState] = selectedDestination;
    const [loading, setLoading] = useState(true);

    const getNearbyTransports = async () => {
        const response = await GET(Api.nearby.selectedStop(
            selectedIdStopState
        ), "json")

        if (!response) {
            console.warn("Error al obtener las bases de stops cercanas.")
            setTransportsForStopDataState([])
            setLoading(false)
            return
        }

        setTransportsForStopDataState(response)
        setLoading(false)
    }

    useEffect(() => {
        getNearbyTransports()
    }, [selectedIdStopState])

    if (loading) {
        return (<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>)
    }

    if (!loading && transportsForStopDataState.length === 0) {
        return (<>
            <Title>Transportes disponibles: {selectedIdStopState}</Title>
            <Empty
                message='Lo siento no hay transportes que pasen por esta base'
                description='Intente moverse seleccionar otra base'
            />
        </>)
    }

    return (
        <View>

            <View>
                <Text className="text-4xl font-extrabold mt-5 flex gap-3 text-app-primary">
                    <View className="pr-3">
                        {/* <MaterialCommunityIcons name="bus-stop" size={20} color="#0d6cf2" /> */}
                        <FontAwesome5 name="bus" size={20} color="#0d6cf2" />
                        {/* <FontAwesome6 name="location-crosshairs" size={20} color="#0d6cf299" /> */}
                    </View>
                    <Text className="">
                        Transportes #{selectedIdStopState}
                    </Text>
                </Text>
            </View>
            <View className="mt-5">
                {transportsForStopDataState.map((transport, i) => {
                    return (
                        <TransportStop
                            key={`transportID-${transport.transportId}`}
                            item={transport}
                        />
                    )
                })}
            </View>
        </View>
    )
}



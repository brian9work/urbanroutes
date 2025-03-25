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

export default function StopsMain() {
    const { nearbyStopsData, selectedIdStop, selectedMain } = useContext(ContextHome);
    const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
    const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
    const [selectedMainState, setSelectedMainState] = selectedMain;

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
        console.log(response)
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
                        <Component
                            key={`nearbyStop-${stop.latitude}-${stop.longitude}`}
                            stop={stop}
                            setSelectedIdStopState={setSelectedIdStopState}
                            setSelectedMainState={setSelectedMainState}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const Component = ({ stop, setSelectedIdStopState, setSelectedMainState }) => {
    return (
        <Pressable
            className="py-3 border-b border-gray-300"
            onPress={() => {
                setSelectedIdStopState(stop.stopId)
                setSelectedMainState(dataMain.TransportsMain)
            }}
        >
            <View>
                <View className="">
                    <Text className="text-2xl font-bold">
                        {stop.stopName}
                    </Text>
                </View>
                <View className="w-full flex flex-row justify-between items-center">
                    <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                        <View className="flex flex-row gap-x2 ml-5 items-center gap-2">
                            <WalkIcon />
                            <Text className="text-lg">
                                a <Text className="text-lg font-bold">
                                    {parseFloat(stop.distance).toFixed(0)}
                                </Text> m.
                            </Text>
                        </View>
                    </View>
                    <View className="flex items-center">
                        <StopIcon />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const Skeleton = () => {
    return (
        <View
            className="py-3 border-b border-gray-300"
        >
            <View>
                <View className="bg-gray-200 w-44 rounded-xl h-8">
                    <Text className="text-2xl font-bold">
                    </Text>
                </View>
                <View className="w-full flex flex-row justify-between items-center">
                    <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                        <View className="flex flex-row gap-x2 ml-5 items-center gap-2">
                            <View className="bg-common-blue/15 p-5 rounded-full"></View>
                            <View className="bg-gray-200 w-44 rounded-xl h-6"></View>
                        </View>
                    </View>
                    <View className="flex items-center">
                    <View className="bg-gray-200 p-5 rounded-full"></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

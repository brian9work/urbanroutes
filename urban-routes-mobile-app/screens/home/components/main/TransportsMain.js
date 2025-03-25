import { View, Text, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import Api from '../../../../services/api';
import GET from '../../../../hooks/GET';
import dataMain from '../../components/main/mainData'
import Title from '../../../../components/common/Title';
import { ClockIcon, MoneyIcon, RouteIcon, StopIcon, TransportIcon } from '../../../../constants/Icons';
import Empty from '../../../../components/common/Empty';

export default function TransportsMain() {
    const { selectedIdStop, transportsForStopData, selectedMain, selectedIdtransport } = useContext(ContextHome);
    const [selectedIdStopState, setSelectedIdStopState] = selectedIdStop;
    const [transportsForStopDataState, setTransportsForStopDataState] = transportsForStopData;
    const [selectedMainState, setSelectedMainState] = selectedMain;
    const [selectedIdtransportState, setSelectedIdtransportState] = selectedIdtransport;
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
            <Title>Transprotes disponibles: {selectedIdStopState}</Title>
            <View>
                {transportsForStopDataState.map((transport, i) => {
                    return (
                        <Component
                            key={`transportID-${transport.transportId}`}
                            item={transport}
                            setSelectedIdtransportState={setSelectedIdtransportState}
                            setSelectedMainState={setSelectedMainState}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const Component = ({ item, setSelectedIdtransportState, setSelectedMainState }) => {
    return (
        <Pressable
            className="flex flex-row justify-between items-center gap-2 py-4 border-b border-gray-300"
            key={`transport-${item.transportId}`}
            onPress={() => {
                setSelectedIdtransportState(item.transportId)
                setSelectedMainState(dataMain.Transport)
            }}
        >
            <View className="">
                <View className="flex flex-row items-center gap-2">
                    <Text className="text-2xl font-bold">
                        {item.transportName}
                    </Text>
                    <Text className="px-3 py-1 bg-gray-100 capitalize rounded-xl text-sm">
                        {item.transportTypeOfTransportName} -
                        {item.transportLineOfTransportName}
                    </Text>
                </View>
                <View className="w-full flex flex-row justify-between items-center">
                    <View className="w-10/12 ">
                        {item.trayectoInfoOrigin.destination !== null &&
                            <SubCategory
                                destination={item.trayectoInfoOrigin.destination}
                                price={item.trayectoInfoOrigin.price}
                                frequency={item.transportFrequency}
                                distance={item.trayectoInfoOrigin.distance}
                            />
                        }
                        {item.trayectoInfoDestination.destination !== null &&
                            <SubCategory
                                destination={item.trayectoInfoDestination.destination}
                                price={item.trayectoInfoDestination.price}
                                frequency={item.transportFrequency}
                                distance={item.trayectoInfoDestination.distance}
                            />
                        }
                    </View>
                    <View className="">
                        <View className="">
                            <TransportIcon />
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const SubCategory = ({ destination, price, frequency, distance }) => {
    return (
        <View className="mt-2 ml-2">
            <Text>Rumbo a:
                <Text className="font-bold">
                    {destination}
                </Text>
            </Text>
            <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                <View className="flex flex-row gap-x-2 ml-2 items-center">
                    <MoneyIcon />
                    <Text className="text-lg">{price}</Text>
                </View>
                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                    <ClockIcon />
                    <Text className="text-lg">{frequency}</Text>
                </View>
                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                    <RouteIcon />
                    <Text className="text-lg">{distance}</Text>
                </View>
            </View>
        </View>
    )
}


const Skeleton = () => {
    return (
        <Pressable
            className="flex flex-row justify-between items-center gap-2 py-4 border-b border-gray-300"
        >
            <View className="">
                <View className="flex flex-row items-center gap-2">
                    <Text className=" bg-gray-200 w-44 rounded-xl h-8"> </Text>
                    <Text className="px-3 py-1 bg-gray-300 rounded-xl text-sm w-20"> </Text>
                </View>
                <View className="w-full flex flex-row justify-between items-center">
                    <View className="w-10/12 ">
                        <View className="mt-2 ml-2">
                            <Text className="bg-gray-200 w-32 h-4 rounded-xl "> </Text>
                            <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                                <View className="flex flex-row gap-x-2 ml-2 items-center">
                                    <View className="bg-common-green/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-common-blue/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-yellow-200/30 p-5 rounded-full"></View>
                                </View>
                            </View>
                        </View>
                        <View className="mt-2 ml-2">
                            <Text className="bg-gray-200 w-32 h-4 rounded-xl "> </Text>
                            <View className="flex flex-row gap-x-0.5 mt-2 ml-2">
                                <View className="flex flex-row gap-x-2 ml-2 items-center">
                                    <View className="bg-common-green/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-common-blue/15 p-5 rounded-full"></View>
                                </View>
                                <View className="flex flex-row gap-x2 ml-4 items-center gap-2">
                                    <View className="bg-yellow-200/30 p-5 rounded-full"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="">
                        <View className="bg-gray-200 p-6 rounded-full"></View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
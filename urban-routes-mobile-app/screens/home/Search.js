import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ContextHome } from '../../app/home/Context';
import { ContextGlobal } from '../../app/ContextGlobal';
import { AntDesign, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CloseMenuSearch from './components/main/buttons/CloseMenuSearch';
import Api from '../../services/api';
import dataMain from './components/main/mainData'
import GET from '../../hooks/GET';

export default function Search() {
    const { endPoint } = useContext(ContextGlobal)
    const { activeMenuSearch, location, facultiesData, selectedMain, activeMenu } = useContext(ContextHome);
    const [activeMenuSearchState, setActiveMenuSearchState] = activeMenuSearch;
    const [faculties, setFaculties] = useState([]);
    const [facultiesDataState, setFacultiesDataState] = facultiesData;

    const [loading, setLoading] = useState(true);

    const getFaculties = async () => {
        const response = await GET(Api.catalogs.getFaculties(endPoint[0]), "json")

        if (!response) {
            console.warn("Error al obtener las facultades disponibles.")
            setFaculties([])
            setLoading(false)
            return
        }

        setFaculties(response)
        setFacultiesDataState(response)
        setLoading(false)
    }


    useEffect(() => {
        getFaculties()
    }, [])

    return (
        <View className={
            `absolute left-0 w-full z-30
            ${activeMenuSearchState ?
                "bg-gray-100 top-0 py-10 h-[900]"
                :
                "bg-gray-100/0 top-11 py-0 h-14 overflow-hidden"
            }
            `}>
            <CloseMenuSearch />
            <View className="">
                <Pressable className="bg-white rounded-3xl w-11/12 h-14 mx-auto border-2 border-gray-300"
                    onPressOut={() => {
                        setActiveMenuSearchState(!activeMenuSearchState)
                    }}
                >
                    <View className="flex flex-row gap-2 items-center w-11/12 mx-auto">
                        <View className="w-[10%]">
                            <FontAwesome name="search" size={24} color="black" />
                        </View>
                        <View className="w-[75%] h-12 flex justify-center ">
                            <Text className="text-xl ">Seleccionar Facultad</Text>
                        </View>
                        <View className="w-[10%]">
                            <FontAwesome5 name="university" size={25} color="black" />
                        </View>
                    </View>
                </Pressable>
            </View>
            <View className="flex flex-row gap-2 items-center w-11/12 mx-auto mt-5">
                <View>
                    <FontAwesome5 name="university" size={25} color="#666" />
                </View>
                <View>
                    <Text className="text-app-primary font-bold text-2xl">Facultades disponibles</Text>
                    <Text className="text-app-secondary text-md">Selecciona una facultad para continuar</Text>
                </View>
            </View>
            {
                loading ? <Text>Cargando Datos .. </Text> :
                    <View className="w-11/12 mx-auto mt-5">
                    <Reboot
                        location={location}
                        activeMenuSearch={activeMenuSearch}
                    />
                        {faculties.map((facultad, index) => {
                            return (
                                <ComponentFacultades
                                    key={"facultad-" + index}
                                    facultad={facultad}
                                    location={location}
                                    activeMenuSearch={activeMenuSearch}
                                    selectedMain={selectedMain}
                                    dataMain={dataMain.RouteToFacilty}
                                    activeMenu={activeMenu}
                                />
                            )
                        })}
                    </View>
            }
        </View>
    )
}

const Reboot = ({ location, activeMenuSearch }) => {
    return (
        <Pressable className="flex flex-row bg-white items-center mb-5 py-4 rounded-3xl border-2 border-gray-200"
            onPressOut={() => {
                location[1]({
                    latitude: 19.41514082532041,
                    longitude: -98.14024764753933,
                    distance: 1000,
                    accuracy: 0,
                })
                activeMenuSearch[1](false)
            }}
        >
            <View className="w-[20%] flex justify-center items-center">
                <View className=" bg-app-primary/10 p-4 rounded-full">
                    <Ionicons name="location-outline" size={28} color="#0d6cf2" />
                </View>
            </View>
            <View className="w-[65%]">
                <Text className="font-bold text-xl">My ubicacion</Text>
            </View>
            <View className="w-[15%] ">
                <AntDesign name="arrowright" size={24} color="#333" />
            </View>
        </Pressable>
    )
}
const ComponentFacultades = ({ facultad, location, activeMenuSearch, selectedMain, dataMain, activeMenu }) => {
    return (
        <Pressable className="flex flex-row bg-white items-center mb-2 py-4 rounded-3xl border-2 border-gray-200"
            onPressOut={() => {
                location[1]({
                    latitude: parseFloat(facultad.latitude),
                    longitude: parseFloat(facultad.longitude),
                    distance: 500
                })
                activeMenuSearch[1](false)
                activeMenu[1](false)
                selectedMain[1](dataMain)
            }}
        >
            <View className="w-[20%] flex justify-center items-center">
                <View className=" bg-app-primary/10 p-4 rounded-full">
                    <Ionicons name="school-outline" size={28} color="#0d6cf2" />
                </View>
            </View>
            <View className="w-[65%]">
                <Text className="font-bold text-xl">{facultad.name}</Text>
                <View className="bg-app-primary/10 rounded-xl w-20 mt-2">
                    <Text className="text-app-primary text-center text-sm ">{facultad.acronym}</Text>
                </View>
            </View>
            <View className="w-[15%] ">
                <AntDesign name="arrowright" size={24} color="#333" />
            </View>
        </Pressable>
    )
}
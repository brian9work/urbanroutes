import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ContextHome from '../../app/home/Context';
import ContextGlobal from '../../app/ContextGlobal';
import { AntDesign, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CloseMenuSearch from './components/main/buttons/CloseMenuSearch';
import Api from '../../services/api';
import dataMain from './components/main/mainData'
import GET from '../../hooks/GET';
import Reboot from './components/search/Reboot';
import ComponentFacultades from './components/search/ComponentFacultades';

export default function Search() {
    const { activeMenuSearch, location, originLocation, facultiesData, selectedMain, activeMenu } = useContext(ContextHome);
    const [activeMenuSearchState, setActiveMenuSearchState] = activeMenuSearch;
    const [faculties, setFaculties] = useState([]);
    const [facultiesDataState, setFacultiesDataState] = facultiesData;

    const [loading, setLoading] = useState(true);

    const getFaculties = async () => {
        const response = await GET(Api.catalogs.getFaculties(), "json")

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
            {loading ? <Text>Cargando Datos .. </Text> :
                <View className="w-11/12 mx-auto mt-5">
                    <Reboot />
                    {faculties.map((facultad, index) => {
                        return (
                            <ComponentFacultades
                                key={"facultad-" + index}
                                facultad={facultad}
                                dataMain={dataMain.RouteToFacilty}
                            />
                        )
                    })}
                </View>}
        </View>
    )
}

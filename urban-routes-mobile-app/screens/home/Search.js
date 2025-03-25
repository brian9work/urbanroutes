import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ContextHome } from '../../app/home/Context';
import { FontAwesome5 } from '@expo/vector-icons';
import CloseMenuSearch from './components/main/buttons/CloseMenuSearch';

export default function Search() {
    const { activeMenuSearch } = useContext(ContextHome);
    const [activeMenuSearchState, setActiveMenuSearchState] = activeMenuSearch;
    return (
        <View className={
            `absolute left-0 w-full z-30
            
            ${activeMenuSearchState ?
                "bg-gray-100 top-0 py-10 h-full"
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
                        <View
                            className="w-11/12 h-12 flex justify-center "
                        >
                            <Text className="text-xl ">Seleccionar Facultad</Text>
                        </View>
                        <FontAwesome5 name="university" size={25} color="black" />
                    </View>
                </Pressable>
            </View>
            <View>
                <Text className="mt-5 w-11/12 mx-auto font-bold text-lg">Facultades disponibles</Text>
                <View className="mt-2">
                    <ComponentFacultades facultad="Facultad de Ingeniería" />
                    <ComponentFacultades facultad="Facultad de Ingeniería" />
                    <ComponentFacultades facultad="Facultad de Ingeniería" />
                </View>
            </View>
        </View>
    )
}

const ComponentFacultades = ({ facultad }) => {
    return (
        <Pressable className="flex flex-row bg-white items-center gap-4 w-11/12 mx-auto p-2 my-1 rounded-full shadow-md">
            <View className="bg-gray-200 p-3 rounded-full">
                <FontAwesome5
                    name="university"
                    size={24}
                    color="black"
                />
            </View>
            <View className="">
                <Text className="text-xl">{facultad}</Text>
            </View>
        </Pressable>
    )
}
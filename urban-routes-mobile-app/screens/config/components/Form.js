import { View, Text, TextInput, Alert, Switch, Pressable, Linking, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { PrimaryButton } from '../../../components/common/Buttom';
import STORAGE from '../../../hooks/STORAGE';
import { ContextHome } from '../../../app/home/Context';
import * as Location from 'expo-location';

export default function Form() {
    const [locationActive, setLocationActive] = useState(false);
    //    const { notificationValueChangue } = useContext(ContextHome);

    const [urlApi, onChangeUrlApi] = useState('');

    const range = [100, 200, 300, 400, 500, 600, 800, 1000, 1500];
    const [distance, onChangeDistance] = useState(range[0]);

    const setStorage = async () => {
        try {
            await STORAGE.endPoint.set(urlApi)
            await STORAGE.distance.set(distance)
            // notificationValueChangue("Datos guardados correctamente.", "success")
            Alert.alert("Datos guardados correctamente.")
        } catch (error) {
            Alert.alert("Error al almacenar los datos en el almacenamiento local.")
            console.log(error)
            // notificationValueChangue("Error al guardar.")
        }
    }

    const checkLocationServices = async () => {
        const servicesEnabled = await Location.getForegroundPermissionsAsync();

        if (servicesEnabled.status !== "granted") {
            setLocationActive(false);
        } else {
            setLocationActive(true);
        }
    };

    const getStorage = async () => {
        const endPoint = await STORAGE.endPoint.get()
        const distance = await STORAGE.distance.get()

        onChangeUrlApi(endPoint)
        onChangeDistance(distance)

    }

    const openTools = async () => {
        await Linking.openSettings();
    }

    useEffect(() => {
        getStorage()
        checkLocationServices()
    }, [])


    return (
        <View className="mt-5 mx-auto px-8 pb-10">
            <View className="mt-5">
                <View className="flex items-center flex-row">
                    <Octicons
                        name="gear"
                        size={26}
                        color="#0d6cf2"
                    />
                    <Text className="font-bold text-2xl ml-3">Configuraciones del sistema</Text>
                </View>
                <Text className="text-app-secondary mt-1">Configure los parámetros básicos del sistema</Text>
            </View>


            <View className="mt-5">
                <Text className=" text-lg font-medium">URL del endpoint</Text>
                <View className="flex flex-row items-center border-2 ps-4 border-gray-200 bg-white rounded-xl">
                    <Feather name="globe" size={24} color="#888" />
                    <View className="w-11/12 pl-3">
                        <TextInput
                            onChangeText={onChangeUrlApi}
                            value={urlApi}
                            placeholder='https://api.ejemplo.com/api'
                        />
                    </View>
                </View>

                <Text className="text-app-secondary mt-1">Ingrese la URL completa incluyendo el protocolo https</Text>
            </View>


            <View className="mt-3">
                <Text className=" text-lg font-medium">Rango distancia maxima</Text>

                <View className="flex flex-row items-center border-2 ps-4 border-gray-200 bg-white rounded-xl">
                    <MaterialCommunityIcons name="radio-tower" size={24} color="#888" />
                    <View className="w-11/12 ">
                        <Picker
                            selectedValue={distance}
                            onValueChange={(itemValue) => onChangeDistance(itemValue)}
                        >
                            {range.map((range, index) => {
                                return <Picker.Item
                                    key={index}
                                    label={range + " metros."}
                                    value={range}
                                />;
                            })}
                        </Picker>
                    </View>
                </View>
            </View>

            <Pressable
                className="mt-3 flex flex-row items-center justify-between"
                onPressOut={() => {
                    openTools()
                }}>
                <View >
                    <Text className=" text-lg font-medium">Compartir ubicacion</Text>
                    <Text className=" text-app-secondary">Permita acceso al GPS</Text>
                </View>
                <View className={`flex ${locationActive ? "bg-app-primary" : "bg-common-red"} p-1 w-14 rounded-full`}>
                    <View className={`w-7 h-7 rounded-full ${locationActive ? "ml-auto" : "mr-auto"} bg-white`}></View>
                </View>
            </Pressable>


            <View className="mt-10">
                <PrimaryButton fun={() => {
                    setStorage()
                }}>Guardar Datos</PrimaryButton>
            </View>

        </View>
    )
}
import { View, Text, Image, Alert, StyleSheet } from 'react-native'
import React from 'react'
import images from '../../constants/images'
import Dim from '../../constants/dimensions'
import AlertUI, { AlertEdit, AlertForVersion, PrimaryAlert } from '../../components/common/Alerts';
import Buttom, { SecundaryButton, TertiaryButton } from '../../components/common/Buttom';
import { useRouter } from 'expo-router';
// import Alerts from './components/version/Alerts'

export default function Version({ res }) {
    const dimensions = Dim();
    return (
        <View className="relative">
            <SelectedAlert res={res} />
            <Image
                source={images.version.transport3}
                style={{ width: dimensions.width, height: dimensions.height }}
                className="object-cover object-center"
            />
            <View 
                className="absolute w-full"
                style={{
                    bottom: 40,
                }}
            >
                <Text className="text-app-secondary font-bold text-lg text-center">Nueva version disponible</Text>
            </View>
        </View>
    )
}

const SelectedAlert = ({ res }) => {
    const router = useRouter(); // Obtén el objeto router
    const ButtonPriority1 = () => {
        return (
            <Buttom
                className="mt-5"
                fun={() => {
                    router.push("/home")
                    Alert.alert("Actualizar")
                }}
            >Actualizar</Buttom>
        )
    }
    const ButtonPriority2 = () => {
        return (
            <View className="mt-5">
                <Buttom
                    className=""
                    fun={() => {
                        router.push("/home")
                        Alert.alert("Actualizar")
                    }}
                >Actualizar ahora</Buttom>

                <SecundaryButton
                    className="mt-5"
                    fun={() => {
                        router.push("/home")
                        Alert.alert("Actualizar Despues")
                    }}
                >Actualizar Despues</SecundaryButton>
            </View>
        )
    }
    const ButtonPriority3 = () => {
        return (
            <>
                <Buttom
                    className="mt-5"
                    fun={() => {
                        router.push("/home")
                        Alert.alert("Actualizar")
                    }}
                >Actualizar ahora</Buttom>

                <TertiaryButton
                    className="mt-5"
                    fun={() => {
                        router.push("/home")
                        Alert.alert("Actualizacion denegada")
                    }}
                >No molestar</TertiaryButton>
            </>
        )
    }


    return (
        <>
            <AlertForVersion
                title={res.name}
                subtitle={res.subName}
                description={res.version + ": " + res.description}
                children={
                    res.priority === "1" ?
                        <ButtonPriority1 />
                    : res.priority === "2" ?
                    <ButtonPriority2 />
                    :
                    <ButtonPriority3 />
                }
            />
        </>
    )
}
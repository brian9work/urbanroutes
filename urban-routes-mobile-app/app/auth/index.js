import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import images from '../../constants/images'
import Dim from '../../constants/dimensions';
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../../components/common/Buttom';

export default function index() {
    const router = useRouter();
    const dimensions = Dim();
    return (
        <View>
            <View className="relative">
                <Image
                    source={images.bgAuth.bgAuth2}
                    resizeMode='cover'
                    style={{ width: dimensions.width, height: dimensions.height }}
                    className="object-cover object-center"
                />
                <View
                    className="
                  absolute top-0 left-0 
                  w-full h-full 
               "
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        bottom: 50,
                    }}
                >
                    <View
                        className="w-full absolute "
                        style={{
                            bottom: 50,
                        }}
                    >
                        <View>
                            <Image
                                source={images.system.icon}
                                style={{ width: dimensions.width * .35, height: dimensions.width * .35 }}
                                className="mx-auto"
                            />
                            <View>
                                <Text className="text-3xl font-bold text-white/90 text-center mt-5">
                                    ¡Bienvenido!
                                </Text>
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-white/90 text-center mt-1">
                                    Llega a cualquier parte desde cualquier lado
                                </Text>
                            </View>
                            <View
                                className="w-10/12 mx-auto flex flex-col mt-5"
                                style={{
                                    gap: 10,
                                }}
                            >
                                <View>
                                    <PrimaryButton 
                                        fun={() => router.push("/auth/Logup")}
                                    >Registrarse
                                    </PrimaryButton>
                                </View>
                                <View>
                                    <SecundaryButton 
                                        fun={() => router.push("/auth/Login")}
                                    >Iniciar Sesion</SecundaryButton>
                                </View>
                                <View>
                                    <TertiaryButton 
                                        fun={() => router.push("/home")}
                                    >Continuar sin iniciar sesion</TertiaryButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
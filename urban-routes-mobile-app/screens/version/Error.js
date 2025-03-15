import { View, Text, Image } from 'react-native'
import React from 'react'
import Dim from '../../constants/dimensions';
import images from '../../constants/images';

export default function Error() {
    const dimensions = Dim();
    return (
        <View className="relative">
            <Image
                source={images.version.transport6}
                style={{ width: dimensions.width, height: dimensions.height }}
                className="object-contain object-center "
            />
            <View
                className="absolute w-full h-full bg-black/50 flex items-center justify-center"
                style={{
                    top: 0,
                }}
            >
                <View className="w-11/12 mx-auto">
                    <Text className="text-red-400 font-bold text-5xl text-center">¡ERROR!</Text>
                    <Text className="text-common-white text-2xl text-center">No se ha podido obtener la version actual de la aplicacion</Text>
                </View>
            </View>
        </View>
    )
}
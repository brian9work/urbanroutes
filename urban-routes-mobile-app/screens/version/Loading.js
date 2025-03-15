import { View, Text, Image } from 'react-native'
import React from 'react'
import Dim from '../../constants/dimensions';
import images from '../../constants/images';

export default function Loading() {
    const dimensions = Dim();
    return (
        <View className="relative">
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
                <Text className="text-app-secondary font-bold text-lg text-center">Comprobando version ...</Text>
            </View>
        </View>
    )
}
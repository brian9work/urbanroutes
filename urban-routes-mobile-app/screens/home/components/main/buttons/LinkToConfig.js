
import { View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome, Octicons } from '@expo/vector-icons'
import ContextHome from '../../../../../app/home/Context';
import { Link, useRouter } from 'expo-router';

export default function CloseMenuSearch() {
    const router = useRouter();
    return (
        <Pressable
            className="z-20"
            onPressOut={() => {
                router.push("/config")
            }}
        >
            <View className={`
               absolute right-5 top-28
               flex items-center justify-center 
               bg-gray-50 w-14 h-14 
               rounded-full
               border-2 border-gray-800
            `}>
                <Octicons
                    name="gear"
                    size={26}
                    color="#313131"
                />
            </View>
            {/* </Link> */}
        </Pressable>
    )
}
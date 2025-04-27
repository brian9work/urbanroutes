
import { View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import ContextHome from '../../../../../app/home/Context';

export default function CloseMenuSearch() {
    const { activeMenuSearch } = useContext(ContextHome);
    const [activeMenuSearchState, setActiveMenuSearchState] = activeMenuSearch

    return (
        <Pressable
            className="z-20"
            onPressOut={() => {
                setActiveMenuSearchState(!activeMenuSearchState)
            }}
        >
            <View className={`
               absolute right-5 -bottom-[805]
               flex items-center justify-center 
               bg-red-700/90 w-12 h-12 
               rounded-full
            `}>
                <FontAwesome
                    name={"close"}
                    size={24}
                    color="#eee" />
            </View>
        </Pressable>
    )
}
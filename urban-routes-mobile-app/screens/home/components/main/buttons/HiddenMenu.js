import { View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { ContextHome } from '../../../../../app/home/Context';

export default function HiddenMenu() {
    const { activeMenu, notificationValue } = useContext(ContextHome);
    const [activeMenuState, setActiveMenuState] = activeMenu;

    return (
        <Pressable
            className="z-20"
            onPressOut={() => {
                setActiveMenuState(!activeMenuState)
            }}
        >
            <View className={`
            absolute right-0 -top-20
               flex items-center justify-center 
               ${activeMenuState ? "bg-green-700/90" : "bg-red-700/90"} w-12 h-12 
               rounded-full
            `}>
                <FontAwesome
                    name={activeMenuState ? "chevron-up" : "close"}
                    size={24}
                    color="#eee" />
            </View>
        </Pressable>
    )
}
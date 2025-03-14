import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Buttom({ fun, children, className }) {
    return (
        <Pressable onPress={fun}>
            <View 
                className={`${className} bg-app-primary py-3 rounded-xl border-2 border-app-primary`}
            >
                <Text 
                    className="
                        text-app-secondary
                        text-center
                        font-bold
                        uppercase
                    ">
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}
export function PrimaryButton({ fun, children, className }) {
    return (
        <Pressable onPress={fun}>
            <View 
                className={`${className} bg-app-primary py-3 rounded-xl border-2 border-app-primary`}
            >
                <Text 
                    className="
                        text-app-secondary
                        text-center
                        font-bold
                        uppercase
                    ">
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}
export function SecundaryButton({ fun, children, className }) {
    return (
        <Pressable onPress={fun}>
            <View 
                className={`${className} bg-app-secondary py-3 rounded-xl border-2 border-app-primary`}
            >
                <Text 
                    className="
                        text-app-primary
                        text-center
                        font-bold
                        uppercase
                    ">
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}
export function TertiaryButton({ fun, children, className }) {
    return (
        <Pressable onPress={fun}>
            <View 
                className={`${className}  py-3 rounded-xl border-2 border-app-primary/0`}
            >
                <Text 
                    className="
                        text-app-primary
                        text-center
                        font-bold
                        uppercase
                    ">
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}
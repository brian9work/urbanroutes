import { View, Text } from 'react-native'
import React from 'react'

export default function Title({children}) {
    return (
        <Text className="text-2xl font-bold mb-2 uppercase">
            {children}
        </Text>
    )
}
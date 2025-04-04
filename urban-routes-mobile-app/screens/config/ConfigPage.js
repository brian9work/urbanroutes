import { View, Text } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'
import Header from '../../components/common/Header'
import Form from './components/Form'

export default function ConfigPage() {
    return (
        <View>
            <Header text="Configuraciones">
                <Octicons
                    name="gear"
                    size={22}
                    color="#212121"
                />
            </Header>
            <Form />
        </View>
    )
}
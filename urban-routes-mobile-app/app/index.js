import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Error from '../screens/version/Error';
import Version from '../screens/version/Version';
import Loading from '../screens/version/Loading';
import GET from '../hooks/GET';
import Api from '../services/api';
import { useRouter } from 'expo-router';
import STORAGE from '../hooks/STORAGE';
import ContextGlobal from './ContextGlobal';

export default function index() {
    const { distance } = useContext(ContextGlobal)
    const router = useRouter();
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const verifyVersion = async () => {
        const response = await GET(Api.control.verifyVersion(), "json")

        if (!response) {
            console.warn("Error al verificar la versión.")
            setResponse([])
            setLoading(true)
        }

        if(response.priority==="4") router.push("/auth/")

        setResponse(response)
        setLoading(true)
    }

    const verifyStorage = async () => {
        const distanceStorage = await STORAGE.distance.get()

        if (distanceStorage === 0) {
            STORAGE.distance.set("500")
        } else {
            distance[1](distanceStorage)
        }
    }


    useEffect(() => {
        verifyVersion()
        verifyStorage()
    }, []);

    return (
        <View>
            {loading ? (
                !response ? (
                    <Error />
                ) : (
                    <Version res={response} />
                )
            ) : (
                <Loading />
            )}
        </View>
    )
}
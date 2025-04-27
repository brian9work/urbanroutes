import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Polyline } from 'react-native-maps'
import ContextHome from '../../../../app/home/Context';

export default function RouteSelected() {
    const { infoOfTransport } = useContext(ContextHome);
    const [dataTransportState, setDataTransportState] = infoOfTransport;
    return (
        <>
            {dataTransportState.route.length === 0 ? <></>
                :
                <Polyline
                    coordinates={
                        dataTransportState.route.map(c => {
                            return {
                                latitude: parseFloat(c.latitude),
                                longitude: parseFloat(c.longitude)
                            }
                        })
                    }
                    strokeColor="#0d6cf2"
                    strokeWidth={5}
                />
            }
        </>
    )
}
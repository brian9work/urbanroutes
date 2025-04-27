import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CardRoute from './routeToFacilty/CardRoute'
import GET from '../../../../hooks/GET'
import Api from '../../../../services/api'
import ContextHome from '../../../../app/home/Context'
import Skeleton from './routeToFacilty/Skeleton'

export default function RouteToFacilty() {
    const { nearbyStopsData, notificationValueChangue, location, selectedStop } = useContext(ContextHome);
    const [nearbyStopsDataState, setNearbyStopsDataState] = nearbyStopsData;
    const [locationState, setLocationState] = location;
    const [data, setData] = useState([])
    const [origin, setOrigin] = useState({})
    const [loading, setLoading] = useState(true);

    const getRoute = async () => {

        const nearbyStop = await GET(Api.nearby.stops(
            19.415401561402106, -98.14000874533764, 500
            // locationState.latitude,
            // locationState.longitude,
            // locationState.distance,
        ), "json")

        const nearbyFaculty = await GET(Api.nearby.stops(
            19.417996111693196,
            -98.12705375871312,
            500,
        ), "json")


        let c = 0;
        let isAvailable = 0;

        while (c < nearbyStop.length) {
            isAvailable = await GET(Api.stopRoutes.getVerifyRoute(
                nearbyStop[c].stopId,
                nearbyFaculty[0].stopId
            ), "text")
            console.log(`ruta (${c}): ${nearbyStop[c].stopId} - ${nearbyFaculty[0].stopId} = ${isAvailable}`)

            if (parseInt(isAvailable) !== 0) {
                break;
            }
            c++;
        }


        let Route = await GET(Api.transport.getRouteForFaculty(
            nearbyStop[2].stopId,
            nearbyFaculty[0].stopId
        ), "json")

        setData(Route)
        setOrigin({
            stopId: nearbyStop[c].stopId,
            name: nearbyStop[0].stopName,
        })


        setLoading(false)
    }

    useEffect(() => {
        getRoute()
    }, [])

    if (data)

        if (loading) {
            return (<>
                <View>
                    <Text className="text-4xl font-extrabold mt-5">
                        <Text>Rumbo a la facultad: </Text>
                        <Text className="text-app-primary">
                            FCBIyT
                        </Text>
                    </Text>
                </View>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </>)
        }

    return (
        <View className="">
            <View>
                <Text className="text-4xl font-extrabold mt-5">
                    <Text>Rumbo a la facultad: </Text>
                    <Text className="text-app-primary">
                        FCBIyT
                    </Text>
                </Text>
            </View>
            <View className="">
                {data.map((route, index) => {
                    return (
                        <CardRoute
                            key={`faculty-route-${route.stopId}-${route.transportName}`}
                            route={{ ...route }}
                            origin={origin}
                        />
                    )
                })}
            </View>
        </View>
    )
}
import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { ContextHome } from '../../../../app/home/Context';
import images from '../../../../constants/images';
import { Marker } from 'react-native-maps';

export default function NearbyStopsForFaculty() {
   const { facultiesData } = useContext(ContextHome);
   const [facultiesDataState, setFacultiesDataState] = facultiesData;
    return (
        <>
            {facultiesDataState.length === 0 ? <></>
                :
                facultiesDataState.map((faculty, index) => {
                    return (
                        <Marker
                            key={"marker-faculty-" + index}
                            coordinate={{
                                latitude: parseFloat(faculty.latitude),
                                longitude: parseFloat(faculty.longitude)
                            }}
                            title={faculty.acronym}
                            description={faculty.name}
                            onPress={() => {
                            }}
                        >
                            <Image
                                source={images.icons.university}
                                className="object-cover object-center"
                                style={{ width: 40, height: 40, aspectRatio: 1, resizeMode: 'contain' }}
                            />
                        </Marker>
                    )
                })}

        </>
    )
}
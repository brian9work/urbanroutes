import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Marker } from 'react-native-maps'
import { ContextHome } from '../../../../app/home/Context';
import mainData from '../main/mainData';
import images from '../../../../constants/images';

export default function SearchPublicTransportMarker() {
  const { selectedStopSearchBeggin, selectedStopSearchEnd, selectedMain} = useContext(ContextHome);

  return (
    <>
      {selectedStopSearchBeggin[0].latitude === undefined || selectedMain[0]!==mainData.Transport ? null : (
        <Marker
          coordinate={{
            latitude: parseFloat(selectedStopSearchBeggin[0].latitude),
            longitude: parseFloat(selectedStopSearchBeggin[0].longitude),
          }}
          title={selectedStopSearchBeggin[0].name}
        >
          <Image
            source={images.icons.firsStop}
            className="object-cover object-center"
            style={{ width: 50, height: 50, aspectRatio: 1, resizeMode: 'contain' }}
          />
        </Marker>
      )}
      {selectedStopSearchEnd[0].latitude === undefined || selectedMain[0]!==mainData.Transport ? null : (
        <Marker
          coordinate={{
            latitude: parseFloat(selectedStopSearchEnd[0].latitude),
            longitude: parseFloat(selectedStopSearchEnd[0].longitude),
          }}
          title={selectedStopSearchEnd[0].name}
        >
          <Image
            source={images.icons.endStop}
            className="object-cover object-center"
            style={{ width: 50, height: 50, aspectRatio: 1, resizeMode: 'contain' }}
          />
        </Marker>
      )}

    </>
  )
}
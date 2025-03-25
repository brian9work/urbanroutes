import { View, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Map from '../../screens/home/Map'
import Main from '../../screens/home/Main'
import Search from '../../screens/home/Search';

export default function index() {
  return (
  <View>
      <Search />
      <Map />
      <Main />
  </View>
)
}
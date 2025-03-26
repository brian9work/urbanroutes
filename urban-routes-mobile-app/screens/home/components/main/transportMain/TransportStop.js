import { View, Text } from 'react-native'
import React from 'react'

export default function TransportStop({item}) {
  return (
          <View
              className="flex flex-row justify-between items-center gap-2 py-4 border-b border-gray-300"
              key={`transport-${item.transportId}`}
          >
              <View className="">
                  <View className="flex flex-row items-center gap-2">
                      <Text className="text-2xl font-bold">
                          {item.transportName}
                      </Text>
                      <Text className="px-3 py-1 bg-gray-100 capitalize rounded-xl text-sm">
                          {item.transportTypeOfTransportName} -
                          {item.transportLineOfTransportName}
                      </Text>
                  </View>
                  <View className="w-full">
                      <View className="">
                          {item.trayectoInfoOrigin.destination !== null &&
                              <SubCategory
                                  id={item.trayectoInfoOrigin.id}
                                  destination={item.trayectoInfoOrigin.destination}
                                  price={item.trayectoInfoOrigin.price}
                                  frequency={item.transportFrequency}
                                  distance={item.trayectoInfoOrigin.distance}
                                  transportId={item.transportId}
                                //   dataMainTransport={dataMain.Transport}
                                //   setSelectedIdtransportState={setSelectedIdtransportState}
                                //   setSelectedMainState={setSelectedMainState}
                                //   setSelectedDestinationState={setSelectedDestinationState}
                              />
                          }
                          {item.trayectoInfoDestination.destination !== null &&
                              <SubCategory
                                  id={item.trayectoInfoDestination.id}
                                  destination={item.trayectoInfoDestination.destination}
                                  price={item.trayectoInfoDestination.price}
                                  frequency={item.transportFrequency}
                                  distance={item.trayectoInfoDestination.distance}
                                //   transportId={item.transportId}
                                //   dataMainTransport={dataMainTransport}
                                //   setSelectedIdtransportState={setSelectedIdtransportState}
                                //   setSelectedMainState={setSelectedMainState}
                                //   setSelectedDestinationState={setSelectedDestinationState}
                              />
                          }
                      </View>
                  </View>
              </View>
          </View>
  )
}
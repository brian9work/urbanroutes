import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from 'react-native-web'
import { FontAwesome6 } from '@expo/vector-icons'

export default function Pickers() {
	return (
		<View>
			<Text>Seleccione una opción:</Text>
			<View className="flex flex-row justify-center items-center gap-1.5 mt-2">
				<View className="w-[45.5%] border-2 border-gray-200 rounded-xl">
					<Picker
						selectedValue={selectedOpcionValueFrom}
						onValueChange={(itemValue) => {
							setSelectedOpcionValueFrom(itemValue)
							setDestination(data.stops.filter((item) => item.name === itemValue))
							setActuallRoute(data.stops.filter((item) => item.name === itemValue)[0].route)
						}}
					>
						{data.stops.map((item, index) => {
							return <Picker.Item key={index} label={item.name} value={item.name} />
						})}
					</Picker>
				</View>
				<View>
					<FontAwesome6 name="arrow-right" size={20} color="black" className="mx-1" />
				</View>
				<View className="w-[45.5%] border-2 border-gray-200 rounded-xl">
					<Picker
						selectedValue={selectedOpcionValueTo}
						onValueChange={(itemValue) => {
							setSelectedOpcionValueTo(itemValue)
						}}
					>
						{destination[0].route.map((item, index) => {
							return <Picker.Item key={index} label={item.name} value={item.name} />
						})}
					</Picker>
				</View>
			</View>
			<View className="flex flex-col mt-1">
				<View className="flex justify-between flex-row mt-3">
					<View className="w-[49%]">
						<BoxWhitBorder
							tit={"Costo del pasaje"}
							text={"$ " + (actuallRoute.filter((item) => item.name === selectedOpcionValueTo))[0].price}
							color={"text-common-green"}
						/>
					</View>
					<View className="w-[49%]">
						<BoxWhitBorder
							tit={"Tiempo Aproximado"}
							text={"$ " + (actuallRoute.filter((item) => item.name === selectedOpcionValueTo))[0].time}
							color={"text-common-blue"}
						/>
					</View>
				</View>
			</View>
			<Separator />
			<View className="mt-5 flex px-2">
				<View className="border-l-8 border-gray-200 pl-5">
					<RouteComponent
						icon="bus-stop-covered"
						from={selectedOpcionValueFrom}
						price={0}
						time={0}
					/>
					{actuallRoute.map((item, index) => {
						return (
							<RouteComponent
								key={index}
								icon={
									item.name === selectedOpcionValueTo
										? "bus-stop"
										: "bus-side"
								}
								from={item.name}
								price={item.price}
								time={item.time}
							/>
						)
					})}
				</View>
			</View>
		</View>
	)
}
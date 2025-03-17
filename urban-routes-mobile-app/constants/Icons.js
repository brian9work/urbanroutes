import { FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { View } from "react-native"

export const WalkIcon = () => {
    return (
            <FontAwesome5 name="walking"
                size={20}
                className=" bg-common-blue/15 p-3 rounded-full"
                color="#007BFF"
            />
    )
}
export const StopIcon = () => {
    return (
        <MaterialCommunityIcons
            name="bus-stop-uncovered"
            size={24}
            color="#212529"
            className="p-3 bg-theme-black/10 rounded-full"
        />
    )
}
export const TransportIcon = () => {
    return (
        <FontAwesome6 name="bus"
            size={26}
            color="#212529"
            className="p-3  rounded-full"
        />
    )
}
export const MoneyIcon = () => {
    return (
        <View className=" bg-common-green/15 p-3 rounded-full">
            <MaterialIcons name="attach-money"
                size={22}
                color="#28A745"
            />
        </View>
    )
}
export const ClockIcon = () => {
    return (
        <View className=" bg-common-blue/15 p-3 rounded-full">
            <MaterialCommunityIcons name="clock-time-three-outline"
                size={22}
                color="#007BFF"
            />
        </View>
    )
}
export const RouteIcon = () => {
    return (
        <View className=" bg-yellow-200/30 p-3 rounded-full">
            <FontAwesome5 name="route"
                size={22}
                color="#F7BE00"
            />
        </View>
    )
}

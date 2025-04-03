import { Link, Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Provider from "./Provider";
import Search from "../../screens/home/Search";
import Map from "../../screens/home/Map";

export default function Layout() {
  return (
    <Provider>
      <View className=" relative ">
        {/* <Map /> */}
        <Slot />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
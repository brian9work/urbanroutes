import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Provider from "./Provider";

export default function Layout() {
  return (
    <Provider>
      <View className=" relative ">
        <Slot />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
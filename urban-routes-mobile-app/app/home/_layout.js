import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <View className=" relative ">
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}
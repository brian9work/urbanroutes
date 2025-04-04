import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css"
import { StatusBar } from "expo-status-bar";
import ProviderGlobal from "./ProviderGlobal";

export default function Layout() {
   return (
      <ProviderGlobal>
         <View className=" relative ">
            <Slot />
            <StatusBar style="auto" />
         </View>
      </ProviderGlobal>
   );
}
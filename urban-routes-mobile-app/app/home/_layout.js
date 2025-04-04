import { Link, Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Provider from "./Provider";
import Search from "../../screens/home/Search";
import Map from "../../screens/home/Map";
import { Notification } from "../../components/common/Notifications";

export default function Layout() {
   return (
      <Provider>
         <View className=" relative ">
            {/* <Map /> */}
            <Notification />
            <Slot />
            <StatusBar style="auto" />
         </View>
      </Provider>
   );
}
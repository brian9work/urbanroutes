import { Slot } from "expo-router";
import { Image, View } from "react-native";
import Provider from "./Provider";
import images from "../../constants/images";
import Dim from '../../constants/dimensions';

export default function Layout() {
   const dimensions = Dim();
   return (
      <Provider>
         <View className=" relative ">
            <View>
               <View className="relative">
                  <Image
                     source={images.bgAuth.bgAuth}
                     resizeMode='cover'
                     style={{ width: dimensions.width, height: dimensions.height }}
                     className="object-cover object-center"
                  />
                  <View className="absolute top-0 left-0 w-full h-full "
                     style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        bottom: 50,
                     }}

                  >
                     <Slot />
                  </View>
               </View>
            </View>
         </View>
      </Provider>
   );
}
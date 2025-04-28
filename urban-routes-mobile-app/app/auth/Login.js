import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '../../constants/images'
import Dim from '../../constants/dimensions';
import { PrimaryButton, SecundaryButton } from '../../components/common/Buttom';
import Input from '../../screens/authUI/components/Input';
import { useRouter } from 'expo-router';

export default function Login() {
   const router = useRouter();
   const dimensions = Dim();
   return (
      <View
         className="w-full absolute "
         style={{
            top: 50
         }}
      >
         <View>
            <Image
               source={images.system.icon}
               style={{ width: dimensions.width * .35, height: dimensions.width * .35 }}
               className="mx-auto"
            />
            <View>
               <Text className="text-3xl font-bold text-white/90 text-center mt-5">
                  ¡Iniciar Sesion!
               </Text>
            </View>
            <View>
               <Text className="text-xl font-bold text-white/90 text-center mt-1">
                  Llega a cualquier parte desde cualquier lado
               </Text>
            </View>
            <Input
               label='Correo Electronico'
               placeholder='correo@electronico.com'
            />
            <Input
               label='Contraseña'
               password={true}
               placeholder='contraseña'
            />
            <View
               className="w-10/12 mx-auto flex flex-col mt-5"
               style={{
                  gap: 10,
               }}
            >
               <View>
                  <PrimaryButton
                     fun={() => router.push("/home")}
                  >Continuar</PrimaryButton>
               </View>
               <View>
                  <SecundaryButton
                     fun={() => router.push("/auth/Logup")}
                  >Registrarse</SecundaryButton>
               </View>
            </View>
         </View>
      </View>
   )
}
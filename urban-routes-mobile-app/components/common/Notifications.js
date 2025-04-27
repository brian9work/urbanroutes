import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, Animated, StyleSheet, Pressable } from 'react-native';
import { AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import ContextHome from '../../app/home/Context';

export const Notification = () => {
   const { notificationValue } = useContext(ContextHome);
   const [ notificationState, setNotificationState ] = notificationValue;

   
   return (
      <Pressable 
         className={`absolute w-8/12 top-10 ${notificationState.value ? 'right-2' : '-right-80'} z-50`}
         onPress={() => {
            setNotificationState({
               value: false,
               type: "success"
            })
         }}
      >
         {
            notificationState.type === "success" ? (
               <Sucess title={"¡Completado!"} message={notificationState.message} />
            ) : notificationState.type === "warning" ? (
               <Warning title={"¡Advertencia!"} message={notificationState.message} />
            ) : notificationState.type === "info" ? (
               <Info title={"¡Atencion!"} message={notificationState.message} />
            ) : 
               <Error title={"¡Ha ocurrido un error!"} message={notificationState.message} />
         }
      </Pressable>
   );

}

const Sucess = ({title, message}) => {
   return (
      <View className="border-2 border-green-500 bg-green-50 z-50 rounded-lg relative ">
         <View className="absolute top-2 right-2">
            <Entypo name="cross" size={24} color="#ef4444" />
         </View>
         <View className="flex-row w-full items-center px-1 py-2">
            <View className="w-[15%] flex items-center justify-center ">
               {/* <Entypo name="check" size={24} color="#22c55e" /> */}
               <Octicons name="check-circle" size={24} color="#22c55e" />
            </View>
            <View className="w-[75%] ">
               <Text className="text-green-500 font-bold text-lg tracking-wide">{title}</Text>
               <Text className="text-gray-500 text-sm">{message}</Text>
            </View>
         </View>
      </View>
   )
}

const Error = ({title, message}) => {
   return (
      <View className="border-2 border-red-500 bg-red-50 z-50 rounded-lg relative ">
         <View className="absolute top-2 right-2">
            <Entypo name="cross" size={24} color="#ef4444" />
         </View>
         <View className="flex-row w-full items-center px-1 py-2">
            <View className="w-[15%] flex items-center justify-center ">
               {/* <Entypo name="cross" size={24} color="#ef4444" />
               <FontAwesome name="close" size={24} color="#ef4444" />
               <Ionicons name="close-sharp" size={24} color="#ef4444" />
               <MaterialCommunityIcons name="close-thick" size={24} color="#ef4444" /> */}
               <Octicons name="x-circle" size={24} color="#ef4444" />
            </View>
            <View className="w-[75%] ">
               <Text className="text-red-500 font-bold text-lg tracking-wide">{title}</Text>
               <Text className="text-gray-500 text-sm">{message}</Text>
            </View>
         </View>
      </View>
   )
}

const Warning = ({title, message}) => {
   return (
      <View className="border-2 border-yellow-500 bg-yellow-50 z-50 rounded-lg relative ">
         <View className="absolute top-2 right-2">
            <Entypo name="cross" size={24} color="#ef4444" />
         </View>
         <View className="flex-row w-full items-center px-1 py-2">
            <View className="w-[15%] flex items-center justify-center ">
               <Octicons name="alert" size={24} color="#eab308" />
            </View>
            <View className="w-[75%] ">
               <Text className="text-yellow-500 font-bold text-lg tracking-wide">{title}</Text>
               <Text className="text-gray-500 text-sm">{message}</Text>
            </View>
         </View>
      </View>
   )
}

const Info = ({title, message}) => {
   return (
      <View className="border-2 border-blue-500 bg-blue-50 z-50 rounded-lg relative ">
         <View className="absolute top-2 right-2">
            <Entypo name="cross" size={24} color="#ef4444" />
         </View>
         <View className="flex-row w-full items-center px-1 py-2">
            <View className="w-[15%] flex items-center justify-center ">
               <Octicons name="info" size={24} color="#3b82f6" />
            </View>
            <View className="w-[75%] ">
               <Text className="text-blue-500 font-bold text-lg tracking-wide">{title}</Text>
               <Text className="text-gray-500 text-sm">{message}</Text>
            </View>
         </View>
      </View>
   )
}






/*
export const DisappearingComponent = ({
      type = "success",
      title = "Notification",
      message = "Este es un texto de prueba de una notificacion"
   }) => 
{
   const { notificationValue } = useContext(ContextHome);
   const [ notificationValueState, setNotificationValueState ] = notificationValue;

   const translateX = useRef(new Animated.Value(450)).current; // Valor inicial en 0

   useEffect(() => {
      Animated.timing(translateX, {
         toValue: notificationValueState ? 130 : 450,
         duration: 1000,
         useNativeDriver: true,
         delay: 1500,
      }).start();
   }, []);

   return (
      <Animated.View style={[styles1.container, { transform: [{ translateX }] }]}>
         {
            type === "success" ? (
               <Sucess title={title} message={message} />
            ) : type === "error" ? (
               <Error title={title} message={message} />
            ) : type === "warning" ? (
               <Warning title={title} message={message} />
            ) : type === "info" ? (
               <Info title={title} message={message} />
            ) : null
         }
      </Animated.View>
   );
};

const styles1 = StyleSheet.create({
   container: {
      width: '100%',
      position: 'absolute',
      top: 40,
      zIndex: 1000,
   },
});

export default function NotificationsComponent({
   title = "Notification",
   message = "Este es un texto de prueba de una notificacion"
}) {
   return (
      <>
         // Sucess
         <View className="
            border-2 border-green-500
            bg-green-50
            z-50 w-8/12
            rounded-lg 
            absolute top-10 -right-80
        ">
            <View className="flex-row w-full items-center px-1 py-2">
               <View className="w-[15%] flex items-center justify-center ">
                  <Entypo name="check" size={24} color="#22c55e" />
               </View>
               <View className="w-[75%] ">
                  <Text className="text-green-500 font-bold text-lg tracking-wide">{title}</Text>
                  <Text className="text-gray-500 text-sm">{message}</Text>
               </View>
            </View>
         </View>
         // Error
         <View className="
            border-2 border-red-500
            bg-red-50
            z-50 w-8/12
            rounded-lg 
            absolute top-32 right-2
        ">
            <View className="flex-row w-full items-center px-1 py-2">
               <View className="w-[15%] flex items-center justify-center ">
                  <Entypo name="cross" size={24} color="#ef4444" />
               </View>
               <View className="w-[75%] ">
                  <Text className="text-red-500 font-bold text-lg tracking-wide">{title}</Text>
                  <Text className="text-gray-500 text-sm">{message}</Text>
               </View>
            </View>
         </View>
         // Warning
         <View className="
            border-2 border-yellow-500
            bg-yellow-50
            z-50 w-8/12
            rounded-lg 
            absolute top-52 right-2
        ">
            <View className="flex-row w-full items-center px-1 py-2">
               <View className="w-[15%] flex items-center justify-center ">
                  <Octicons name="alert" size={24} color="#eab308" />
               </View>
               <View className="w-[75%] ">
                  <Text className="text-yellow-500 font-bold text-lg tracking-wide">{title}</Text>
                  <Text className="text-gray-500 text-sm">{message}</Text>
               </View>
            </View>
         </View>
         // Info
         <View className="
            border-2 border-blue-500
            bg-blue-50
            z-50 w-8/12
            rounded-lg 
            absolute top-72 right-2
        ">
            <View className="flex-row w-full items-center px-1 py-2">
               <View className="w-[15%] flex items-center justify-center ">
                  <Fontisto name="info" size={24} color="#3b82f6" />
               </View>
               <View className="w-[75%] ">
                  <Text className="text-blue-500 font-bold text-lg tracking-wide">{title}</Text>
                  <Text className="text-gray-500 text-sm">{message}</Text>
               </View>
            </View>
         </View>
      </>
   )
}
*/
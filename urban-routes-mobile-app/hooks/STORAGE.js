import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE = {
    endPoint:{
        set: async(value)=>{try {await AsyncStorage.setItem('@endPoint', value)}catch (e) {console.warn("Error al almacenar el EndPoint"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@endPoint')) || 0,
        remove: async()=> (await AsyncStorage.removeItem('@endPoint')),
    },
    distance:{
        set: async(value)=>{try {await AsyncStorage.setItem('@distance', value)}catch (e) {console.warn("Error al almacenar el distance"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@distance')) || 0,
        remove: async()=> (await AsyncStorage.removeItem('@distance')),
    },
}

export default STORAGE;
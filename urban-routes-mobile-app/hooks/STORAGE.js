import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE = {
    distance:{
        set: async(value)=>{try {await AsyncStorage.setItem('@distance', value)}catch (e) {console.warn("Error al almacenar el distance"); console.error(e);}},
        get: async()=> (await AsyncStorage.getItem('@distance')) || 0,
        remove: async()=> (await AsyncStorage.removeItem('@distance')),
    },
}

export default STORAGE;
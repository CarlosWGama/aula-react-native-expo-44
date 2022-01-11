import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const api   = Axios.create({
    baseURL: 'http://192.168.0.20/api'
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('jwt');
    if (token)
        config.headers = {'Authorization': `Bearer ${token}`}

    return config
})



export default api;
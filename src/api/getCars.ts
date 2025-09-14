import axios from 'axios';
import { API_URL } from '../constants/car';
import { CarModel } from '../components/CardView/props';

interface ApiResponse {
    cars: CarModel[]
}

export const fetchGetCarData = async (id: number) => {
    try {
        const response = axios.get<ApiResponse>(API_URL);
        const carData = (await response).data.cars.find((car) => car.id === id) || null;

        return carData;
        
    } catch (error) {
        console.log(error);        
    }
};
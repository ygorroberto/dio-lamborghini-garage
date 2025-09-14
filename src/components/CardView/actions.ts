import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

// fazer uma solicitação para a API
export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        const response = await fetchGetCarData(id);

        if (response) {
            setCarData(response);
        }

    } catch (error) {
        console.log(error);
        setCarData(null);
    }
};

export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        let response;
        if (carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1);
        }

        if (response) {
            setCarData(response);
        }

    } catch (error) {
        console.log(error);
        setCarData(null);
    }
};

export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        let response;
        if (carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1);
        }

        if (response) {
            setCarData(response);
        }

    } catch (error) {
        console.log(error);
        setCarData(null);
    }
};
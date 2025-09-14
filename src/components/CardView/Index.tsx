import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from './style';
import Divisor from '../Divisor/Index';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton/Index';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export default function CardView () {

    const [carData, setCarData] = useState<CarModel | null>(null);
    
    useEffect(() => {
        (async () => {
            await loadCarData(10, setCarData);
        })();
    }, []);

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={require("./../../../assets/logo-lamborghini.png")} />
        </View>
    );

    const renderCarDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carModel}>{carData?.carName}</Text>
        </View>
    );

    const renderCarImage = () => (
        <Image style={styles.carImage} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}/>
    );

    const renderPriceControls = () => (
        <View style={styles.priceContainer}>
            <Button title='<' color={'#01a6b3'} onPress={() => {handlePreviousItem(carData, setCarData)}} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color={'#01a6b3'} onPress={() => {handleNextItem(carData, setCarData)}} />
        </View>
    );

    return (
        <View style={styles.container}>
            {renderLogoBox()}

            <Divisor />

            {renderCarDetails()}

            {renderCarImage()}

            <Divisor />

            <BuyButton />

            {renderPriceControls()}
        </View>
    );
}
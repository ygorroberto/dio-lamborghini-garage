import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function BuyButton () {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}
import { View, Text } from "react-native";
import { styles } from './style';
import CardView from "../../components/CardView/Index";

export default function GarageScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}>
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
                
                <CardView />
            </View>
        </View>
    );
}
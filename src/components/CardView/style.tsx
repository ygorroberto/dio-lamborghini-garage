import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        marginTop: 20,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    imageLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain',
    },
    carBrand: {
        color: "#fff",
        fontWeight: '400',
        fontSize: 18,
        fontStyle: 'italic',
    },
    carModel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    carImage: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '100%',
        height: 200,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 10,
        marginTop: 10
    },
    priceLabel: {
        color: '#fff',
        fontSize: 22
    }
});
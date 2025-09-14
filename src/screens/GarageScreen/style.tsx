import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1e1e20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraBox: {
        position: 'relative',
        width: 350,
        height: '80%',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        overflow: 'hidden',
    },
    corner: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderTopColor: 'red',
        borderRightWidth: 20,
        borderRightColor: 'transparent'
    },
    topLeft: {
        top: 0,
        left: 0,
        transform: [{rotate: '360deg'}]
    },
    topRight: {
        top: 0,
        right: 0,
        transform: [{rotate: '90deg'}]
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        transform: [{rotate: '-90deg'}]
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        transform: [{rotate: '180deg'}]
    },
});

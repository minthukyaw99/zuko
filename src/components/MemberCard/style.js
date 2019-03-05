import { Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const qrCodeSize = (height /4) * .75;

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        height: height / 4,
        margin: 30
    },
    imageBackgroundImageStyle: {
        borderRadius: 20
    },
    containerStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'Roboto-Light',
        color: 'white',
        fontSize: 25
    },
    qrCodeStyle: {
      width: qrCodeSize,
      height: qrCodeSize,
    }
});

export default styles;
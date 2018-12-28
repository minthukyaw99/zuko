import { Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        height: height / 4,
        margin: 30
    },
    imageBackgroundImageStyle: {
        borderRadius: 20
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'Roboto-Light',
        color: 'white',
        fontSize: 25
    }
});

export default styles;
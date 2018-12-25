import React, { Component } from 'react';
import {Button, Keyboard, Animated, StyleSheet, KeyboardAvoidingView, Dimensions} from 'react-native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

import { goHome } from '../../helpers/navigation';
import logo from '../../assets/images/logo-blue.png';

const uiTheme = {
    palette: {
        primaryColor: COLOR.blue700,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const { width } = Dimensions.get('window');
export const IMAGE_HEIGHT = width / 3;
export const IMAGE_HEIGHT_SMALL =0;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10
    },
    logoStyle: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        //marginBottom: 20,
        //padding:10,
        //marginTop:20
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        // paddingVertical: 5,
        // paddingHorizontal: 15,
        width: window.width - 30,
    },
});


class SignUp extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT_SMALL,
        }).start();
    };

    keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT,
        }).start();
    };

    handleSubmit() {
        goHome();
    }

    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <Animated.Image
                        style={[styles.logoStyle, { height: this.imageHeight }]}
                        source={logo}
                    />
                    <TextField
                        // prefix="Hello"
                        title='Please choose unique username'
                        label='User Name'
                        //baseColor={COLOR.blue700}
                    />
                    <TextField
                        label='Email'
                        title='adc@email.com'
                    />
                    <TextField
                        label='Password'
                    />
                    <TextField
                        label='Confirm Password'
                    />
                    <TextField
                        select
                        label='Secret Question'
                    />
                    <Button primary raised onPress={this.handleSubmit} title='Submit'/>
                </KeyboardAvoidingView>
            </ThemeContext.Provider>
        )
    }
};

export default SignUp;

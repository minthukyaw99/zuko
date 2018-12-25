import React from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import { COLOR, ThemeContext, getTheme, Card, Button, Dialog } from 'react-native-material-ui';
import { Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';

import Container from '../../components/Container/index';
import Branding from '../../components/Branding/SignInBranding';
const uiTheme = {
    palette: {
        primaryColor: COLOR.pink500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const styles = StyleSheet.create({
    loginStyle: {
        flex: 1,
        justifyContent: 'space-around',
        flexShrink: 0,
        backgroundColor: COLOR.grey200,
        padding: 30,
        borderRadius: 10
    },
    thirdStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    buttonStyle:{
        marginTop: 50
    },
    linkStyle: {
        fontSize: 20,
        color: COLOR.pink500
    }
});


const SignIn = ({ componentId }) => {
    function goToSignUp() {
        Navigation.push(componentId, {
            component: {
                name: 'screens.auth.signUp',
                passProps: {
                    text: 'Pushed screen'
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Create Account'
                        },
                        visible: true
                    }
                }
            }
        })
    }
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
           <Container primary>
               <Branding showText={true}/>
               <KeyboardAvoidingView style={{ flex: 1}} behavior="padding" enabled>
                   <View style={styles.loginStyle}>
                       <Hideo
                           keyboardType='email-address'
                           placeholder='username@email.com'
                           iconClass={FontAwesomeIcon}
                           iconName={'user'}
                           iconColor={'white'}
                           iconBackgroundColor={ COLOR.blue700 }
                           inputStyle={{ color: '#464949' }}
                       />
                       <Hideo
                           keyboardType='default'
                           secureTextEntry
                           placeholder='**********'
                           iconClass={FontAwesomeIcon}
                           iconName={'lock'}
                           iconColor={'white'}
                           iconBackgroundColor={COLOR.blue700}
                           inputStyle={{ color: '#464949' }}
                       />
                       <Button primary raised text={'Sign In'}/>
                   </View>
               </KeyboardAvoidingView>
               <View style={styles.thirdStyle}>
                   <Text raised onPress={goToSignUp} style={styles.linkStyle}>Create Account</Text>
                   <Text style={styles.linkStyle}>|</Text>
                   <Text style={styles.linkStyle}>Login With Facebook</Text>

               </View>
           </Container>
        </ThemeContext.Provider>
    )
};

export default SignIn;

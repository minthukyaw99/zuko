import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { List, ListItem } from 'react-native-elements';
import { View, Text, Button, Platform, Image, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';


const { width } = Dimensions.get('window');

class SideMenuScreen extends Component {
    render() {
        //const testID = this.props.side === 'left' ? testIDs.HIDE_LEFT_SIDE_MENU_BUTTON : testIDs.HIDE_RIGHT_SIDE_MENU_BUTTON;
        return (
            <View style={styles.root} testID={this.props.testID}>
                <View style={{ flex: 1}}/>
                <View style={{flex: 5 }}>
                    <View style={{ flex: 1,  alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <View style={{ marginLeft: width/3 }}>
                            <Image
                                source={require('../assets/images/logo-blue.png')}
                                style={{width: 50, height: 50}}
                            />
                            <Text style={{ marginTop: 20 }}>Min Thu Kyaw</Text>
                        </View>
                    </View>
                    <View style={{ flex: 5, alignItems: 'stretch', justifyContent: 'flex-start'}} >
                        <List>
                            <ListItem
                                title="Profile"
                                leftIcon={{ name: 'account-circle', type: 'material' }}
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                        </List>
                        <List>
                            <ListItem
                                title="Setting"
                                leftIcon={{ name: 'gear', type: 'evilicon' }}
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                        </List>
                        <List>
                            <ListItem
                                title="Log out"
                                leftIcon={{ name: 'external-link', type: 'evilicon' }}
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                        </List>
                    </View>
                </View>
            </View>
        );
    }

    hideSideMenu() {
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                [this.props.side]: {
                    visible: false
                }
            }
        });
    }

    pushAndCloseSideMenu() {
        if (Platform.OS === 'ios') {
            this.hideSideMenu();
        }
        Navigation.push('tab1Stack', {
            component: {
                name: 'navigation.playground.TextScreen',
                options: {
                    sideMenu: {
                        left: {
                            visible: false,
                            enabled: false
                        }
                    }
                }
            }
        });
    }
}
export default SideMenuScreen;

const styles = {
    root: {
        flexGrow: 1,
        //justifyContent: 'flex-start',
        //backgroundColor: COLOR.white
    }
};
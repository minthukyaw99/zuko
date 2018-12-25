import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { COLOR } from 'react-native-material-ui';

class SideMenuScreen extends Component {

    render() {
        //const testID = this.props.side === 'left' ? testIDs.HIDE_LEFT_SIDE_MENU_BUTTON : testIDs.HIDE_RIGHT_SIDE_MENU_BUTTON;
        return (
            <View style={styles.root} testID={this.props.testID}>
                <Text>Side Bar</Text>
                <Text style={styles.h1}>{`This is a ${this.props.side} side menu screen`}</Text>
                <Button title='Hide Side Menu' onPress={() => this.hideSideMenu()} />
                <Button title='Push' onPress={() => this.pushAndCloseSideMenu()} />
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
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: COLOR.blue50
    }
};
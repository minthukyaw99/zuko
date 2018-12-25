import React, { Component } from 'react';
import {Navigation} from "react-native-navigation/lib/dist/index";
import Icon from 'react-native-vector-icons/EvilIcons';


class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenuStatus: false
        };

        Navigation.events().bindComponent(this);

        this.setNavIcon();
    }

    setNavIcon() {
        Icon.getImageSource('navicon', 32).then(src =>
            Navigation.mergeOptions(this.props.componentId, {
                topBar: {
                    leftButtons: [
                        {
                            id: 'settingsButton',
                            icon: src,
                        },
                    ],
                },
                bottomTab: {
                    icon: src
                }
            })
        );
    }

    navigationButtonPressed(buttonId) {
        this.setState({
            sideMenuStatus: !this.state.sideMenuStatus
        }, () => {
            Navigation.mergeOptions(this.props.componentId, {
                sideMenu: {
                    ['left']: {
                        visible: this.state.sideMenuStatus,
                    }
                }
            });
        })
    }
}

export default Base;
import React, { Component } from 'react';
import {Navigation} from "react-native-navigation/lib/dist/index";
import Icon from 'react-native-vector-icons/EvilIcons';


class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenuStatus: false
        };
        console.log('------- props are ------ ' + JSON.stringify(this.props));
        Navigation.events().bindComponent(this);
        this.setNavIcon();
        this.setTopBarRightIcon();
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

    setTopBarRightIcon() {
        const { componentId } = this.props;

        if (componentId == 'registerCard') {
            Icon.getImageSource('plus', 32).then((src) =>
                Navigation.mergeOptions(this.props.componentId, {
                    topBar: {
                        rightButtons: [
                            {
                                id: 'settingsButton',
                                icon: src,
                            },
                        ],
                    },
                })
            );
        }
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
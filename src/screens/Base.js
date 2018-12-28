import React, { Component } from 'react';
import {Navigation} from "react-native-navigation/lib/dist/index";
import Icon from 'react-native-vector-icons/EvilIcons';

import topBarRightIconConfig from '../config/topBarRightIconConfig';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenuStatus: false
        };
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
                            id: 'viewSideMenu',
                            icon: src,
                        },
                    ],
                }
            })
        );
    }

    setTopBarRightIcon() {
        const { componentId } = this.props;
        if (topBarRightIconConfig.hasOwnProperty(componentId)) {
            topBarRightIconConfig[componentId](componentId);
        }
    }

    navigationButtonPressed({ buttonId }) {
        switch (buttonId) {
            case 'viewSideMenu':
                this.handleHamburgerClick();
                break;
            case 'viewCart':
                this.handleCartClick();
                break;
            case 'addNewCard':
                this.handleAddNewCardClick();
                break;
            default:
                break;
        }
    }

    handleAddNewCardClick() {
        Navigation.push('card', {
            component: {
                name: 'screens.card.addNewCard',
                options: {
                    topBar: {
                        title: {
                            text: 'Add New Card'
                        }
                    },
                    bottomTabs: {
                        visible: false,
                    }
                }
            }
        });
    }

    handleCartClick() {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'screens.cart.cartSummary',
                passProps: {
                    text: 'Pushed screen'
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Your Cart'
                        }
                    },
                    bottomTabs: {
                        visible: false,
                    }
                }
            }
        });
    }

    handleHamburgerClick() {
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
        });
    }
}

export default Base;
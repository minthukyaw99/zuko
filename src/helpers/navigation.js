import React from 'react';
import {Navigation} from 'react-native-navigation';
import { COLOR } from 'react-native-material-ui';

export const goToAuth = () => Navigation.setRoot({
    root: {
        stack: {
            options: {
                topBar: {
                    visible: false
                }
            },
            children: [
                {
                    component: {
                        name: 'screens.auth.signUp',
                        passProps: {
                            text: 'This is tab 2',
                        }
                    }
                },
                {
                    component: {
                        name: 'screens.auth.signIn',
                        passProps: {
                            text: 'This is tab 1',
                            myFunction: () => 'Hello from a function!',
                        }
                    }
                },
            ]
        }
    }
});


export const goHome = () => Navigation.setRoot({
    root: {
        sideMenu: {
            left: {
                component: {
                    name: 'screens.sideMenuScreen',
                    passProps: {
                        side: 'left'
                    }
                }
            },
            center: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                id: 'product',
                                children: [
                                    {
                                        component: {
                                            id: 'productDetail',
                                            name: 'screens.product.productDetail',
                                            passProps: {
                                                text: 'text is passed',
                                            },
                                        },
                                        component: {
                                            id: 'productList',
                                            name: 'screens.product.productList',
                                            passProps: {
                                                text: 'text is passed',
                                            },
                                        },
                                    }
                                ],
                                options: {
                                    bottomTab: {
                                        iconColor: COLOR.grey500,
                                        selectedIconColor: COLOR.pink400,
                                        icon: require('../assets/images/homeIcon.png'),
                                        //testID: testIDs.FIRST_TAB_BAR_BUTTON
                                    }
                                }
                            }
                        },
                        {
                            stack: {
                                id: 'card',
                                children: [
                                    {
                                        component: {
                                            id: 'cardDetail',
                                            name: 'screens.card.cardDetail',
                                            passProps: {
                                                text: 'text is passed',
                                                bottomIcon: 'barcode'
                                            },
                                        },
                                        component: {
                                            id: 'cardList',
                                            name: 'screens.card.cardList',
                                            passProps: {
                                                text: 'text is passed',
                                                bottomIcon: 'barcode'
                                            },
                                        },
                                    }
                                ],
                                options: {
                                    bottomTab: {
                                        iconColor: COLOR.grey400,
                                        selectedIconColor: COLOR.pink500,
                                        icon: require('../assets/images/cardIcon.png'),
                                    },
                                }
                            },
                        },
                        {
                            stack: {
                                id: 'tab3Stack',
                                children: [
                                    {
                                        component: {
                                            name: 'screens.card.cardList',
                                            passProps: {
                                                text: 'text is passed',
                                                bottomIcon: 'barcode'
                                            },
                                        }
                                    }
                                ],
                                options: {
                                    bottomTab: {
                                        iconColor: COLOR.grey500,
                                        selectedIconColor: COLOR.pink400,
                                        icon: require('../assets/images/qrCode.png'),
                                    }
                                }
                            },
                        },
                    ],
                    options: {
                        bottomTab: {
                            textColor: '#AED581',
                            iconColor: '#AED581',
                            selectedTextColor: '#90CAF9',
                            selectedIconColor: '#90CAF9',
                            //fontFamily: 'HelveticaNeue-Italic',
                            fontSize: 13
                        },
                    }
                }
            },
        }
    }
});


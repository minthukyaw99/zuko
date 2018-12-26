import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('screens.sideMenuScreen', () => require('../screens/SideMenuScreen').default);
    Navigation.registerComponent('helpers.Initializing', (sc) => require('./Initializing').default);

    //product
    Navigation.registerComponent('screens.product.productList', () => require('../screens/product/ProductList').default);
    Navigation.registerComponent('screens.product.productDetail', () => require('../screens/product/ProductDetail').default);

    // authorization
    Navigation.registerComponent('screens.auth.signIn', () => require('../screens/auth/SignIn').default);
    Navigation.registerComponent('screens.auth.signUp', () => require('../screens/auth/SignUp').default);

    Navigation.registerComponent('screens.card.cardList', () => require('../screens/card/CardList').default);
    Navigation.registerComponent('screens.card.cardDetail', () => require('../screens/card/CardDetail').default);
    Navigation.registerComponent('screens.card.addNewCard', () => require('../screens/card/AddNewCard').default);
    //cart
    Navigation.registerComponent('screens.cart.cartSummary', () => require('../screens/cart/CartSummary').default);
}
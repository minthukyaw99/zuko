import Icon from 'react-native-vector-icons/EvilIcons';
import { Navigation } from 'react-native-navigation';

export function setCartIcon(componentId) {
    Icon.getImageSource('cart', 32).then((src) =>
        Navigation.mergeOptions(componentId, {
            topBar: {
                rightButtons: [
                    {
                        id: 'viewCart',
                        icon: src,
                    },
                ],
            },
        })
    );
}

export function setAddNewCardIcon(componentId) {
    Icon.getImageSource('plus', 32).then((src) =>
        Navigation.mergeOptions(componentId, {
            topBar: {
                rightButtons: [
                    {
                        id: 'addNewCard',
                        icon: src,
                    },
                ],
            },
        })
    );
}
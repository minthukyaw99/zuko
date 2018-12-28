import React from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Wrapper = () => {
    const shopping = MaterialIcons.getImageSource('local-mall', 32);
    const wallet = MaterialIcons.getImageSource('account-balance-wallet', 32);
    const card = MaterialIcons.getImageSource('credit-card', 32);
    return Promise.all([ shopping, wallet, card ]).then(values => values);
};
export default Wrapper;
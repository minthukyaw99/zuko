import { setAddNewCardIcon, setCartIcon } from '../helpers/setTopBarRightIcon';

const topBarRightIconConfig = {
    productList: setCartIcon,
    productDetail: setCartIcon,
    cardList: setAddNewCardIcon,
    cardDetail: setAddNewCardIcon,
};

export default topBarRightIconConfig;
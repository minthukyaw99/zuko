import React from 'react';
import { View, Text } from 'react-native';

import Base from '../Base';

class ProductDetail extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    Product Detail
                </Text>
            </View>
        )
    }
}

export default ProductDetail;

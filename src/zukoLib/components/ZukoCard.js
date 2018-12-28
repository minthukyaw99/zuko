import React from 'react';
import { Card } from 'react-native-elements';
import { COLOR } from "react-native-material-ui";

const ZukoCard = ({ children }) => (
    <Card
        containerStyle={{
            alignItems: 'center',
            borderColor: COLOR.white,
            shadowColor: COLOR.grey300,
            shadowOffset: {width: 1, height: 1},
            shadowRadius: 3,
        }}
    >
        {children}
    </Card>
);

export default ZukoCard;

/**
 <Text style={{ color: COLOR.grey600, fontFamily: 'Roboto-Light', fontSize: 30}}>
 Balance: $123,321,2431
 </Text>
 */
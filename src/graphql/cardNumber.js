import { gql } from 'apollo-boost';

const GetCardNumber = gql`
    query cardNumber @client {
        cardNumber
    }
`;

export default GetCardNumber;
import { gql } from 'apollo-boost';

const GetBalance = gql`
    query{
        balance(id: "10156326395169633") {
            balance
        }
    }
`;

export default GetBalance;
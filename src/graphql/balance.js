import { gql } from 'apollo-boost';

const GetBalance = gql`
    query GetBalance($id: String!) {
        balance(id: $id) {
            balance
        }
    }
`;

export default GetBalance;
export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id != action.payload),
                error: null
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                error: null
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'SET_TRANSACTION_KEY':
            return {
                ...state,
                transaction_key: action.payload
            }
        default:
            return state;
    }
}
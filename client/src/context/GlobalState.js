import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//inital state
const initalState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initalState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    //Actions
    function deleteTransaction(id) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    function addTransaction(transaction) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
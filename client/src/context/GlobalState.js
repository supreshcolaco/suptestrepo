import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//inital state
const initalState = {
    transactions: [],
    error: null,
    loading: true,
    transaction_key: ''
}

// Create Context
export const GlobalContext = createContext(initalState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    //Actions
    // Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id, transaction_key) {
        const config = {
            headers: {
                'trans-key': transaction_key
            }
        }
        try {
            await axios.delete(`/transactions/${id}`, config);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction, transaction_key) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'trans-key': transaction_key
            }
        }

        try {
            const res = await axios.post('/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    function setTransactionKey(transaction_key) {
        dispatch({
            type: 'SET_TRANSACTION_KEY',
            payload: transaction_key
        });
    }
    return (<GlobalContext.Provider value={{
        error: state.error,
        loading: state.loading,
        transactions: state.transactions,
        transaction_key: state.transaction_key,
        deleteTransaction,
        addTransaction,
        getTransactions,
        setTransactionKey
    }}>
        {children}
    </GlobalContext.Provider>);
}
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions, getTransactions, error } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let FlashMessage;

    if (error) {
        FlashMessage = <div className="alert alert-error"><p>Error Message:{error}</p></div>;
    } else {
        FlashMessage = <div></div>;
    }
    return (
        <div>
            {FlashMessage}
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

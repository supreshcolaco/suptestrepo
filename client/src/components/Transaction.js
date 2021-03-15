import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {moment(transaction.date).format('DD-MM-YYYY')} &nbsp; &nbsp;{transaction.description}({transaction.user_name}) <span>{sign}₹{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}

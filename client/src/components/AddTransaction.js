import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [transactionUser, setTransactionUser] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            description: text,
            amount: +amount,
            user_name: transactionUser,
            date: moment(transactionDate).format('YYYY-MM-DD[T00:00:00.000Z]')
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionDate"
                    >Transaction Date</label
                    ><br />
                    <DatePicker dateFormat="dd-M-yyyy" selected={transactionDate} onChange={date => setTransactionDate(date)} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionDate"
                    >Transaction User</label
                    ><br />
                    <div className="select">
                        <select value={transactionUser} onChange={(e) => setTransactionUser(e.target.value)}>
                            <option value=""></option>
                            <option value="Seldon">Seldon</option>
                            <option value="Lester">Lester</option>
                        </select>
                    </div>
                </div>
                <button className="btn" >Add transaction</button>
            </form>
        </div>
    )
}

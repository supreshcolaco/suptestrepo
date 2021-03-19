import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Balance = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const [currentMonthYear, setCurrentMonthYear] = useState(new Date());
    const reloadData = date => {

        let monthStart = moment(date).clone().startOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
        let monthEnd = moment(date).clone().endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
        //console.log(monthStart);
        //console.log(monthEnd);
        getTransactions(monthStart, monthEnd);
    }
    return (
        <>
            <label htmlFor="currentMonthYear">Change Month Year</label>
            <DatePicker
                selected={currentMonthYear}
                onChange={date => (setCurrentMonthYear(date), reloadData(date))}
                dateFormat="MM/yyyy"
                showMonthYearPicker
            />
            <h4>Current Balance For Month of {moment(currentMonthYear).format('MMMM-YYYY')}</h4>
            <h1 id="balance">₹{total}</h1>
        </>
    )
}

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '₹ ' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

export const IndividualIncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const amountsSeldon = transactions.filter(transaction => transaction.user_name == 'Seldon').map(transaction => transaction.amount);
    const amountsLester = transactions.filter(transaction => transaction.user_name == 'Lester').map(transaction => transaction.amount);
    const profitShare = (total / 2).toFixed(2);
    const incomeSeldon = amountsSeldon
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expenseSeldon = (
        amountsSeldon.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );
    const profitShareSeldon = (incomeSeldon - expenseSeldon) - profitShare;
    const incomeLester = amountsLester
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expenseLester = (
        amountsLester.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );

    const profitShareLester = (incomeLester - expenseLester) - profitShare;

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Total Income Seldon</h4>
                    <p id="money-plus" className="money plus">{moneyFormatter(incomeSeldon)}</p>
                </div>
                <div>
                    <h4>Total Expense Seldon</h4>
                    <p id="money-minus" className="money minus">{moneyFormatter(expenseSeldon)}</p>
                </div>
                <div>
                    <h4>To Be {profitShareSeldon < 0 ? 'Credited' : 'Debited'}</h4>
                    <p id="money-minus" className={profitShareSeldon < 0 ? 'money plus' : 'money minus'}>{moneyFormatter(profitShareSeldon)}</p>
                </div>
            </div>
            <div className="inc-exp-container">
                <div>
                    <h4>Total Income Lester</h4>
                    <p id="money-plus" className="money plus">{moneyFormatter(incomeLester)}</p>
                </div>
                <div>
                    <h4>Total Expense Lester</h4>
                    <p id="money-minus" className="money minus">{moneyFormatter(expenseLester)}</p>
                </div>
                <div>
                    <h4>To Be {profitShareLester < 0 ? 'Credited' : 'Debited'}</h4>
                    <p id="money-minus" className={profitShareLester < 0 ? 'money plus' : 'money minus'}>{moneyFormatter(profitShareLester)}</p>
                </div>
            </div>
        </div>
    )
}

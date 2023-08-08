import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, dispatch,currency } = useContext(AppContext);

    const setBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.symbol}<input
                required='required'
                type='number'
                value={budget}
                step={10}
                style={{ marginLeft: '0', size: 10 }}
                onChange={(event) => setBudget(event.target.value)}>
            </input></span>
        </div>
    );
};
export default Budget;
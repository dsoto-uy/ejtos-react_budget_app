import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = (props) => {
    const { currency, dispatch } = useContext(AppContext);   

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '1rem'}}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                    </div>
                    <select style={{background: 'lightYellow', color:'black'}} className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue value={currency.symbol}>{currency.symbol} {currency.name}</option>    
                        <option value="$" name="euro">$ Dollar</option>                   
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="rupee">₹ Ruppee</option>                       
                    </select>
                </div>
            </div>

        </div>
    );
};

export default CurrencySelector;
import React from 'react';
import {useStateValue} from '../hoc/Context';

const Telephone = () => {
    const [{telValue, telError}, dispatch] = useStateValue();

    /* валидация введённых символов */
    const validation = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/^[0-9\s()+-]+$/.test(keyValue))
            event.preventDefault();
    };

    /* валидация длинны номера */
    const getTel = (e) => {
        dispatchTel(e.target.value);
        let strLen = telValue.replace(/\D+/g,'').length;
        if (strLen < 7) {
            dispatchTelError('номер слишком короткий')
        } else {
            dispatchTelError('')
        }
    };

    const dispatchTelError = (text) => {
        dispatch({
            type: 'setTelError',
            payload: text
        })
    };

    const dispatchTel = (text) => {
        dispatch({
            type: 'setTelValue',
            payload: text
        });
    };

    return (
        <div className="telephone">
            <p className="title">
                Введите номер телефона
            </p>
            <input
                type="tel"
                className="input"
                placeholder="введите номер"
                value={telValue}
                onChange={e => dispatchTel(e.target.value)}
                onKeyUp={e => getTel(e)}
                onKeyPress={e => validation(e)}
            />
            <p className="error">
                {telError}
            </p>
        </div>
    )
};

export default Telephone;
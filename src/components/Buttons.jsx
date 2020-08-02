import React, {useEffect} from 'react';
import {useStateValue} from '../hoc/Context';

const Buttons = () => {
    const [{inputValue, telValue, telError, buttonError}, dispatch] = useStateValue();

    /* получаем данные из localStorage при загрузке страницы */
    useEffect(() => {
        const storageValue = localStorage.getItem('product');
        const storageTel = localStorage.getItem('telephone');
        dispatchValueStorage(storageValue);
        dispatchTelStorage(storageTel);
    }, []);

    /* проверка заполнения полей */
    useEffect(() => {
        if (inputValue.length < 1 || telValue.length < 1) {
            dispatchButtonError('заполните все поля')
        } else {
            dispatchButtonError('')
        }
    }, [inputValue, telValue]);

    const dispatchValueStorage = (text) => {
        dispatch({
            type: 'setInputValue',
            payload: text || ''
        })
    };

    const dispatchTelStorage = (text) => {
        dispatch({
            type: 'setTelValue',
            payload: text || ''
        })
    };

    const dispatchButtonError = (text) => {
      dispatch({
          type: 'setButtonError',
          payload: text
      })
    };

    /* сохранение данных в localStorage и отправка на сервер */
    const save = () => {
            dispatchButtonError('');
            localStorage.setItem('product', inputValue);
            localStorage.setItem('telephone', telValue);
            let data = {
                'product': inputValue,
                'telephone': telValue,
            };
            fetch('http://somebd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            }).then(res => {
                console.log(res.status);
            })
              .catch(error => console.error(error));
    };

    /* очистка полей */
    const clear = () => {
        dispatchValueStorage('');
        dispatchTelStorage('');
        localStorage.clear();
    };

    return (
        <div className="buttons">
            <button
                className="buttons__button buttons__button--save"
                onClick={save}
                disabled={Boolean(buttonError + telError)}
            >
                сохранить
            </button>
            <button
                className="buttons__button buttons__button--clear"
                onClick={clear}
            >
                очистить
            </button>
            <p className="error">
                {buttonError}
            </p>
        </div>
    )
};

export default Buttons;
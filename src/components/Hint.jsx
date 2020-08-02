import React, {useState} from 'react';
import {useStateValue} from '../hoc/Context';
import {unique} from '../functions/unique';

const Hint = () => {
    const [{inputValue}, dispatch] = useStateValue();
    const [hintsArr, setHintsArr] = useState([]);

    /* список ulr для отправки запроса */
    const urls = ["./data/base_1.json", "./data/base_2.json", "./data/base_3.json"];
    /* минимальное количество подсказок для приостановки запросов */
    const minHints = 5;
    /* минимальное количество символов для отправки запроса и поиска подсказок */
    const minInputValue = 2;
    let hintsArrNew = [];
    let k = 0;

    /* старт отправки запросов и обработки данных */
    const search = () => {
        if (inputValue.length >= minInputValue) {
            fetchData(urls[k])
            .then((data) => dataHandler(data))
        } else {
            setHintsArr([])
        }
    };

    /* запрос по url */
    const fetchData = url => {
        return fetch(url)
            .then(res => res.json())
            .then((result) => {
                return result.text;
            }, (error) => {
                    console.log(error);
                })
    };

    /* обработка данных и поиск подсказок */
    const dataHandler = data => {
        let newData = data.filter((item) => {
            return (item.toLowerCase().startsWith(inputValue.toLowerCase()));
        });
        hintsArrNew.push(...newData);
        k++;
        if (hintsArrNew.length < minHints && urls.length > k) {
            fetchData(urls[k])
            .then((data) => dataHandler(data))
        } else {
            setHintsArr(hintsArrNew);
        }
    };

    /* выбор значения из подсказок */
    const getText = item => {
        dispatchValue(item);
        setHintsArr([]);
    };

    const dispatchValue = (text) => {
        dispatch({
            type: 'setInputValue',
            payload: text
        })
    };

    /* рендер списка подсказок */
    const renderList = hintsArr.map(item => {
        return (
            <p
                key={unique()}
                className="hint__string"
                onClick={() => getText(item)}
            >
                {item}
            </p>
        )
    });

    return (
        <div className="hint">
            <p className="title">
                Введите запрос
            </p>
            <input
                type="text"
                className="input"
                value={inputValue}
                onChange={e => dispatchValue(e.target.value)}
                onKeyUp={search}
                placeholder="например, пароочистители"
            />
            {hintsArr.length ?
                <div className="hint__list">
                    {renderList}
                </div>
                : null
            }
        </div>
    )
};

export default Hint;
import React from 'react';
import {render} from 'react-dom';

import './style.scss';
import { StateProvider } from './hoc/Context';
import {reducer} from './hoc/reducer';
import Hint from './components/Hint';
import Telephone from './components/Telephone';
import Buttons from './components/Buttons';

const App = () => {
    const initialState = {
        inputValue: '',
        telValue: '',
        telError: '',
        buttonError: ''
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div className="app">
                <Hint/>
                <Telephone/>
                <Buttons/>
            </div>
        </StateProvider>
    )
};

render(<App/>, document.getElementById('app'));
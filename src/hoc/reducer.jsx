export const reducer = (state, action) => {
    switch (action.type) {
        case 'setInputValue':
            return {
                ...state,
                inputValue: action.payload
            };
        case 'setTelValue':
            return {
                ...state,
                telValue: action.payload
            };
        case 'setTelError':
            return {
                ...state,
                telError: action.payload
            };
        case 'setButtonError':
            return {
                ...state,
                buttonError: action.payload
            };

        default:
            return state;
    }
};
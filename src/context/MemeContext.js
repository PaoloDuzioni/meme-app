import React, { createContext, useReducer } from 'react';

const initialState = {
    topText: 'Top Text',
    bottomText: 'Bottom Text',
    imageSelected: false,
};

const MemeContext = createContext(initialState);
const { Provider } = MemeContext;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        // ACTIONS
        switch (action.type) {
            case 'UPDATE_TOP':
                return {
                    ...state,
                    topText: action.payload,
                };
            case 'UPDATE_BOTTOM':
                return {
                    ...state,
                    bottomText: action.payload,
                };
            case 'IMAGE_SELECTED':
                return {
                    ...state,
                    imageSelected: true,
                };
            default:
                throw new Error();
        }
    }, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { MemeContext, StateProvider };

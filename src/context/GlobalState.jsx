import React, { createContext, useReducer, useEffect } from 'react';

// Початковий стан
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Створення контексту
/* eslint-disable react-refresh/only-export-components */
export const GlobalContext = createContext(initialState);

// Reducer для обробки дій
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return { ...state, transactions: state.transactions.filter(t => t.id !== action.payload) };
        case 'ADD_TRANSACTION':
            return { ...state, transactions: [action.payload, ...state.transactions] };
        // ДОДАНО:
        case 'CLEAR_TRANSACTIONS':
            return { ...state, transactions: [] };
        default:
            return state;
    }
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Збереження в LocalStorage при зміні стейту
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    function deleteTransaction(id) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    function addTransaction(transaction) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    function clearTransactions() {
        dispatch({ type: 'CLEAR_TRANSACTIONS' });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            clearTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
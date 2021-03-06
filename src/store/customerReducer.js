import { REMOVE_CUSTOMERS, ADD_CUSTOMER, ADD_MANY_CUSTOMERS } from './types';

const defaultState = {
    customers: [],
};

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload],
            };

        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };

        case REMOVE_CUSTOMERS:
            return {
                ...state,
                customers: state.customers.filter(
                    (customer) => customer.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER,
    payload,
});

export const addManyCustomersAction = (payload) => ({
    type: ADD_MANY_CUSTOMERS,
    payload,
});

export const removeCustomerAction = (payload) => ({
    type: REMOVE_CUSTOMERS,
    payload,
});

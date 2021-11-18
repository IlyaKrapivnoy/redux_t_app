import { Button, Divider, List, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {
    addCustomerAction,
    removeCustomerAction,
} from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './store/asyncActions/customers';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    console.log('cash>>', cash);
    console.log('customers>>', customers);

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };

    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div className='flex flex-col items-center mt-20'>
            <div className='text-3xl'>{cash}</div>
            <div className='mt-10 mb-4'>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => addCash(Number(prompt()))}
                >
                    Add Cash
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => getCash(Number(prompt()))}
                >
                    Get Cash
                </Button>
            </div>
            <div className='mt-4 mb-10'>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => addCustomer(prompt())}
                >
                    Add Customer
                </Button>
                <Button
                    variant='contained'
                    onClick={() => dispatch(fetchCustomers())}
                >
                    Add Customer from API
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => getCash(Number(prompt()))}
                >
                    Remove Customer
                </Button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <List component='nav'>
                            <ListItemText
                                // primary={<>{customer.name}</> <HighlightOffIcon />}
                                primary={
                                    <div className='flex justify-between'>
                                        {customer.name}{' '}
                                        <CancelPresentationIcon
                                            onClick={() =>
                                                removeCustomer(customer)
                                            }
                                        />
                                    </div>
                                }
                            />
                            <Divider />
                        </List>
                    ))}
                </div>
            ) : (
                <div>No Clients Found</div>
            )}
        </div>
    );
}

export default App;

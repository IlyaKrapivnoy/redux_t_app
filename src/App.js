import { Button, Divider, List, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
// import { customerReducer } from './store/customerReducer';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    console.log('cash>>', cash);
    console.log('customers>>', customers);

    const ADD_CASH = 'ADD_CASH';
    const GET_CASH = 'GET_CASH';
    const ADD_CUSTOMER = 'ADD_CUSTOMER';
    const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

    const addCash = (cash) => {
        dispatch({ type: ADD_CASH, payload: cash });
    };

    const getCash = (cash) => {
        dispatch({ type: GET_CASH, payload: cash });
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch({ type: ADD_CUSTOMER, payload: customer });
    };

    const removeCustomer = (customer) => {
        dispatch({ type: REMOVE_CUSTOMERS, payload: customer.id });
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
                                primary={<div className="flex justify-between">{customer.name} <CancelPresentationIcon onClick={() => removeCustomer(customer)} /></div>}
                                
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

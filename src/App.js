import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    console.log('cash>>', cash);

    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash });
    };
    const getCash = (cash) => {
        dispatch({ type: 'GET_CASH', payload: cash });
    };

    return (
        <div className='flex flex-col items-center mt-20'>
            <div className='text-3xl'>{cash}</div>
            <div className='my-10'>
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
        </div>
    );
}

export default App;

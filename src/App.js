import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash);
    console.log('cash>>', cash);

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
        >
            <div style={{ fontSize: 20 }}>{cash}</div>
            <button>Add Cash</button>
            <button>Get Cash</button>
        </div>
    );
}

export default App;

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { reset, increment, decrement, incrementByAmount } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder='enter the amount'
        onChange={(e) => setAmount(e.target.value)} />
      <br />
      <br />
      <button onClick={handleIncrementAmountClick}>Increment</button>
    </div>
  )
}

export default App

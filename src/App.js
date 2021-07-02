import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './vendors/redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => {dispatch(increment())}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
    </div>
  );
}

export default App;

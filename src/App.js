import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './store/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      Counter: {counter}
      
      <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;

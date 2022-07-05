
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH', payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type:'GET_CASH', payload:cash})
  }

  return (
    <div className="App">

      <div className='buttons'>
        <button onClick={()=>addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={()=>getCash(Number(prompt()))}>Withdraw cash</button>
        <div className='cash'>Sum of money: {cash}</div>
      </div>

    </div>
  );
}

export default App;

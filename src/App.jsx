
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAC, getCashAC} from "./store/cashReducer";
import {addCustomerAC, removeCustomerAC} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const addCash = (cash)=>{
    dispatch(addCashAC(cash))
  }
  const getCash = (cash)=>{
    dispatch(getCashAC(cash))
  }
  const addCustomer = (name)=>{
    const customer = {
      name,
      id:new Date()
    }
    dispatch(addCustomerAC(customer))
  }
  const removeCustomer = (customer)=>{
    dispatch(removeCustomerAC(customer.id))
  }

  return (
    <div className="App">

      <div className='buttons'>
        <div className='cash'>Sum of money: {cash}</div>
        <button onClick={()=>addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={()=>getCash(Number(prompt()))}>Withdraw cash</button>
        <button onClick={()=>addCustomer(prompt())}>Add customer</button>
        <button onClick={()=>dispatch(fetchCustomers())}>Add customer from base</button>
        {customers.length?
          <div>{customers.map(customer=>
          <div className='customers'>{customer.name}
          <button onClick={()=>removeCustomer(customer)} className='remove'>x</button>
          </div>
          )}</div>:
          <div className='error'>Customers is not found</div>
        }
      </div>
    </div>
  );
}

export default App;

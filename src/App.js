import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash) // 'cash' - это cashReducer, затем переменная 'cash' получаемая из состояния
    console.log(cash)

// cash. 
    const addCash = (cash) => { // в dispatch прокидываем action {type='',paylod='?'}, и state изменяется 
      if (!isNaN(cash) && cash !== 0) {
        dispatch({type: 'ADD_CASH', payload: cash})      
      }
    }

    const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
    }

  return (
      <div className="App">
        <header className="App-header">
          <p>My Bank</p>
        </header>

{/* view */}
          {/* cash */}
          <div style={{fontSize: '2rem', marginTop: '100px'}}>
              {cash}
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
              <button onClick={() => addCash(Number(prompt()))}>Добавить средства</button>
              <button onClick={() => getCash(Number(prompt()))}>Снять средства</button>
          </div>

      </div>
  );
}

export default App;

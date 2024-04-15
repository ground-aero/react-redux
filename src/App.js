import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash) // 'cash' - это cashReducer, затем переменная 'cash' получаемая из состояния
    console.log(cash)

  const users = useSelector(state => state.usersReducer.users)
  console.log(users)

// cash. 
    const addCash = (cash) => { // в dispatch прокидываем action {type='',paylod='?'}, и state изменяется 
      if (!isNaN(cash) && cash !== 0) {
        dispatch({type: 'ADD_CASH', payload: cash})      
      }
    }

    const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
    }

// users
    const addUser = (name) => {
      const user = {
          name,
          id: Date.now()
      }
      dispatch({ type: 'ADD_USER', payload: user })
    }

    const removeUser = (users) => {
      dispatch({type: 'REMOVE_USER', payload: users.id})
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

          {/* users:[] */}
          <div style={{fontSize: '2rem', marginTop: '100px'}}>
          <p style={{fontSize: '2rem', fontWeight: 'bold', color: 'darkgreen', marginBottom: '10px', textDecoration: "underline"}}>
              Users:
          </p>
              {/*{users.map((user, _ind) => <div key='_ind'>{user.name}</div>)}*/}
              {users.length > 0 ?
                  <div>
                      {users.map((user, _ind) =>
                          <div key={_ind} style={{border: '1px solid gray', display: 'flex', justifyContent: 'space-between', paddingLeft: '60px'}}>
                              {user.name}
                              <button onClick={() => removeUser(user)} style={{justifySelf: 'stretch'}}>Удалить игрока</button>
                          </div>
                      )}
                  </div>
                  :
                  <div>Пользователи отсутствуют</div>}
          </div>

          <div style={{display: 'block', justifyContent: 'center', marginTop: '30px'}}>
               <button onClick={() => addUser(prompt())} style={{padding: '15px'}}>Добавить пользователя</button>
          </div>

      </div>
  );
}

export default App;

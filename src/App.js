import React from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux"

function App() {
  const dispatch = useDispatch()
  const [isUserName, setUserName] = React.useState('');

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

// users.

    /** Обработчик изменения инпута обновляет стейт */
    function handleChangeUserName (e) {
      setUserName(e.target.value)
    }

    function handleSubmitUser(e) {
      e.preventDefault();// Запрещаем браузеру переходить по адресу формы
      addUser(isUserName);
      setUserName('');
    }

    const addUser = (name) => {
      const user = {
        id: Math.random(),
        name: name,
      }
      dispatch({type: 'ADD_USER', payload: user})
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
          {/* cash ---------------------------------------------------------------*/}
          <div style={{fontSize: '2rem', marginTop: '100px'}}>
              {cash}
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
              <button onClick={() => addCash(Number(prompt()))}>Добавить средства</button>
              <button onClick={() => getCash(Number(prompt()))}>Снять средства</button>
          </div>

          {/* users:[] ---------------------------------------------------------------*/}
          <div className="users_view">
            <p className="users_header">
                Пользователи:
            </p>

            {users.length > 0 ?
              <>
                {users.map((user, _ind) =>
                          <div key={_ind} className="username_view">
                              {user.name}
                              <button onClick={() => removeUser(user)} className="btn_del">Удалить</button>
                          </div>
                    )}
              </>
              :
                <div>Пользователи отсутствуют</div>}
          </div>

          <form onSubmit={handleSubmitUser} action="#" className="form">
            <label htmlFor="name">Name (2 to 25 characters):</label>
            <input value={isUserName} onChange={handleChangeUserName} type="text" id="name" name="name" required minLength="2" maxLength="25" size="10"
              className="input_style"/>
 
            <button type="submit" className="btn_add">Добавить пользователя</button>
          </form>
              

      </div>
  );
}

export default App;

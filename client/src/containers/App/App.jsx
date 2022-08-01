
import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card/Card";
import MyDeck from "../MyDeck/MyDeck";
import Register from "../Auth/Registration/Register";
import Login from "../Auth/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authReg } from "../../store/auth/actionCreator";
import { deckLoad } from "../../store/deck/actionsCreator";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  // проверка авторизации у пользователя после перезагрузки страницы
  useEffect(() => {
    fetch('/registration/session')
    .then(data => data.json())
    .then(responce => dispatch(authReg(responce)))
  }, [dispatch])

  // получение всех колод пользователя
  useEffect(() => {
    fetch('/mydeck')
    .then(data => data.json())
    .then(responce => dispatch(deckLoad(responce)))
  }, [dispatch])

  return (
 <div>
     <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path='/registration' element={<Register/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/' element={<StartPage />} />
             {user.id && 
             <>
             <Route path='/main' element={<MainPage />} />
             <Route path='/card' element={<Card/>} />
             <Route path='/mydeck' element={<MyDeck/>} />
             </>
             }
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

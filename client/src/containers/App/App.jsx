import React, {useEffect} from 'react'
import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card/Card";
import MyDeck from "../MyDeck/MyDeck";
import Register from "../Auth/Registration/Register";
import Login from "../Auth/Login/Login";
import Shop from "../Shop/Shop";
import {useDispatch} from "react-redux";
import {initUser} from "../../store/auth/actionCreator";

function App() {
    const dispatch = useDispatch()

    const checkUser = async () => {
        const responce = await fetch('/main')
        const res = await responce.json()
            dispatch(initUser(res))
    }

    useEffect(()=>{
        checkUser()
    },[])
  return (
 <div>
     <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path='/registration' element={<Register/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/' element={<StartPage />} />
             <Route path='/main' element={<MainPage />} />
             <Route path='/card' element={<Card/>} />
             <Route path='/mydeck' element={<MyDeck/>} />
             <Route path='/buy' element={<Shop/>} />
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

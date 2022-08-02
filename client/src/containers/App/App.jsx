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
import {useDispatch, useSelector} from "react-redux";
import {initUser} from "../../store/auth/actionCreator";
import EditDeck from "../EditDeck/EditDeck";
import {initDeck} from "../../store/deck/actionCreators";
import HomePage from '../HomePage/HomePage';


function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const checkUser = async () => {
        const responce = await fetch('/main')
        const res = await responce.json()
            dispatch(initUser(res))
    }
    const getCards = async () => {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        dispatch(initDeck(res))
    }

    useEffect(()=>{
        checkUser()
        getCards()
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
             {user.id && 
             <>
             <Route path='/card' element={<Card/>} />
             <Route path='/buy' element={<Shop/>} />
             <Route path='/mydeck' element={<MyDeck/>} />
             <Route path='/editdeck' element={<EditDeck/>} />
             </>
             }
             <Route path='/home' element={<HomePage />} />

         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

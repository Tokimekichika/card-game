
import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card/Card";
import MyDeck from "../MyDeck/MyDeck";
import Register from "../Auth/Registration/Register";
import Login from "../Auth/Login/Login";

function App() {
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
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;


import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card/Card";

function App() {
  return (
 <div>
     <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path='/' element={<StartPage />} />
             <Route path='/main' element={<MainPage />} />
             <Route path='/card' element={<Card/>} />
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

import React from 'react';

import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar";
import HomePage from '../HomePage/HomePage';


function App() {
  return (
 <div>
     <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path='/' element={<StartPage />} />
             <Route path='/main' element={<MainPage />} />
             <Route path='/home' element={<HomePage />} />
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

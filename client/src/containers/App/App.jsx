
import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
 <div>
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<StartPage />} />
             <Route path='/main' element={<MainPage />} />
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;

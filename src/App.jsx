
import './App.css'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/movies" element={<Movies/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Libro from './components/Libro';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/prensa' />
        <Route path='/libros/:id' element={<Libro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Libro from './components/Libro';
import Musica from './components/Musica';
import Lecturas from './components/Lecturas';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/prensa' />
        <Route path='/libros/:id' element={<Libro/>} />
        <Route path='/musica' element={<Musica/>} />
        <Route path='/lecturas' element={<Lecturas/>}/>
        <Route path='/fantasma' />
      </Routes>
    </BrowserRouter>
  )
}

export default App

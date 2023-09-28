import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Libro from './components/Libro';
import Musica from './components/Musica';
import Lecturas from './components/Lecturas';
import Fantasma from './components/Fantasma';
import EnglishBio from './components/EnglishBio';
import LibrosPage from './components/LibrosPage';
import OtrasAntologias from './components/OtrasAntologias';
import PrologoImpecables from './components/PrologoImpecables';
import LeLectura from './components/LeLectura';
import LoveYouLess from './components/LoveYouLess';
import Prensa from './components/Prensa';
import Talleres from './components/Talleres';

function App() {
  

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/prensa' element={<Prensa/>} />
        <Route path='/libros/:id' element={<Libro/>} />
        <Route path='/musica' element={<Musica/>} />
        <Route path='/lecturas' element={<Lecturas/>}/>
        <Route path='/fantasma' element={<Fantasma/>}/>
        <Route path='/english' element={<EnglishBio/>}/>
        <Route path='/libros' element={<LibrosPage/>}/>
        <Route path='/otrasant' element={<OtrasAntologias/>}/>
        <Route path='/prologoimp' element={<PrologoImpecables/>}/>
        <Route path='/lelectura' element={<LeLectura/>}/>
        <Route path='/loveyouless' element={<LoveYouLess/>}/>
        <Route path='/talleres' element={<Talleres/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

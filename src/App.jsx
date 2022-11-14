import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarPhone from './components/NavBarPhone';
import ImagePc from './components/ImagePc';
import NavBarPc from './components/NavBarPc';
import "./App.css";

import Principal from './pages/Principal';
import Descripcion from './pages/Descripcion';
import AcercaDe from './pages/AcercaDe';
import Portafolio from './pages/Portafolio';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBarPhone />
      <main>
        <ImagePc />
        <Routes>
          <Route path='/portafolioRP' element={ <Principal /> } />
          <Route path='/portafolioRP/descripcion' element={ <Descripcion /> } />
          <Route path='/portafolioRP/acercade' element={ <AcercaDe /> } />
          <Route path='/portafolioRP/portafolio' element={ <Portafolio /> } />
          <Route path='/portafolioRP/contacto' element={ <Contacto /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <NavBarPc />
      </main>
    </BrowserRouter>
  );
}

export default App;
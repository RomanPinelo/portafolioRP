import { HashRouter, Route, Routes } from 'react-router-dom';
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
    <HashRouter>
      <NavBarPhone />
      <main>
        <ImagePc />
        <Routes>
          <Route path='/' element={ <Principal /> } />
          <Route path='/descripcion' element={ <Descripcion /> } />
          <Route path='/acercade' element={ <AcercaDe /> } />
          <Route path='/portafolio' element={ <Portafolio /> } />
          <Route path='/contacto' element={ <Contacto /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <NavBarPc />
      </main>
    </HashRouter>
  );
}

export default App;
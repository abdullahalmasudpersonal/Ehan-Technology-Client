import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import BrandPc from './Pages/Desktops/BrandPc/BrandPc';
import Desktops from './Pages/Desktops/Desktops/Desktops';
import Home from './Pages/Home/Home/Home';
import CcCamera from './Pages/Security/CcCamera/CcCamera/CcCamera';
import Security from './Pages/Security/Security/Security';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/desktops' element={<Desktops/>} />
        <Route path='/desktops/brandPc' element={<BrandPc/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/security/ccCamera' element={<CcCamera/>} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;

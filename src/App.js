import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import BrandPc from './Pages/Desktops/BrandPc/BrandPc';
import Desktops from './Pages/Desktops/Desktops/Desktops';
import Home from './Pages/Home/Home/Home';
import AllLaptops from './Pages/Laptops/AllLaptops/AllLaptops';
import Laptops from './Pages/Laptops/Laptops/Laptops';
import Dell from './Pages/Monitors/Dell/Dell';
import Hp from './Pages/Monitors/Hp/Hp';
import Monitors from './Pages/Monitors/Monitors/Monitors';
import CcCamera from './Pages/Security/CcCamera/CcCamera/CcCamera';
import Hikvisions from './Pages/Security/CcCamera/CcCamera/Hikvisions/Hikvisions';
import HikvisionsBuyNow from './Pages/Security/CcCamera/CcCamera/Hikvisions/HikvisionsBuyNow/HikvisionsBuyNow';
import Security from './Pages/Security/Security/Security';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/desktops' element={<Desktops />} />
        <Route path='/desktops/brandPc' element={<BrandPc />} />
        <Route path='/laptops' element={<Laptops />}>
          <Route path='allLaptops' element={<AllLaptops />} />
        </Route>
        <Route path='/monitors' element={<Monitors />} >
          <Route index element={<Hp />} />
          <Route path='dell' element={<Dell />} />
        </Route>
        <Route path='/security' element={<Security />} />
        <Route path='/security-cc-camera' element={<CcCamera />} />
        <Route path='/hikvisions' element={<Hikvisions />} />
        <Route path='/hikvisions/:hikvisionId' element={<HikvisionsBuyNow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

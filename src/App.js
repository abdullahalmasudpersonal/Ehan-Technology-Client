import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Accessories from './Pages/Accessories/Accessories/Accessories';
import Micropacks from './Pages/Accessories/Keyboard/Micropacks/Micropacks';
import Keyboard from './Pages/Accessories/Keyboard/Keyboard/Keyboard';
import Mouse from './Pages/Accessories/Mouse/Mouse';
import BrandPc from './Pages/Desktops/BrandPc/BrandPc';
import Desktops from './Pages/Desktops/Desktops/Desktops';
import Home from './Pages/Home/Home/Home';
import AllLaptops from './Pages/Laptops/AllLaptops/AllLaptops';
import Laptops from './Pages/Laptops/Laptops/Laptops';
import Dell from './Pages/Monitors/Dell/Dell';
import Hp from './Pages/Monitors/Hp/Hp';
import Monitors from './Pages/Monitors/Monitors/Monitors';
import CcCamera from './Pages/Security/CcCamera/CcCamera/CcCamera';
import Hikvisions from './Pages/Security/CcCamera/Hikvisions/Hikvisions';
import HikvisionsBuyNow from './Pages/Security/CcCamera/Hikvisions/HikvisionsBuyNow/HikvisionsBuyNow';
import MicropackBuyNow from './Pages/Accessories/Keyboard/Micropacks/MicropackBuyNow/MicropackBuyNow';
import Security from './Pages/Security/Security/Security';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Components from './Pages/Components/Components/Components';
import Processor from './Pages/Components/Processor/Processor/Processor';
import AMDS from './Pages/Components/Processor/AMDS/AMDS';
import AMDBuyNow from './Pages/Components/Processor/AMDS/AMDBuyNow/AMDBuyNow';



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
        {/* --------------- start Components --------------- */}
        <Route path='/components' element={<Components />} />
        <Route path='/porcessors' element={<Processor />} />
        <Route path='/amds' element={<AMDS />} />
        <Route path='/amds/:amdId' element={<AMDBuyNow />} />
        {/* --------------- end Components --------------- */}
        {/* --------------- start Accessories --------------- */}
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/keyboard' element={<Keyboard />} />
        <Route path='/micropacks' element={<Micropacks />} />
        <Route path='/micropacks/:micropackId' element={<MicropackBuyNow />} />
        <Route path='/mouse' element={<Mouse />} />
        {/* --------------- end Accessories --------------- */}
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

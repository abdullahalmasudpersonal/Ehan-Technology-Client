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
import Intels from './Pages/Components/Processor/Intels/Intels';
import IntelBuyNow from './Pages/Components/Processor/Intels/IntelBuyNow/IntelBuyNow';
import TPLinks from './Pages/Networking/Router/TPLinks/TPLinks';
import TPLinkBuyNow from './Pages/Networking/Router/TPLinks/TPLinkBuyNow/TPLinkBuyNow';
import Router from './Pages/Networking/Router/Router/Router';
import Dells from './Pages/Monitors/Dells/Dells';
import OfficeEquipments from './Pages/OfficeEquipments/OfficeEquipments/OfficeEquipments';
import Storages from './Pages/Storages/Storages/Storages';
import Adatas from './Pages/Components/Rams/Adatas/Adatas';
import Rams from './Pages/Components/Rams/Rams/Rams';
import DellBuyNow from './Pages/Monitors/Dells/DellBuyNow/DellBuyNow';
import AdataBuyNow from './Pages/Components/Rams/Adatas/AdataBuyNow/AdataBuyNow';
import HPs from './Pages/OfficeEquipments/Printers/HPs/HPs';
import HPsBuyNow from './Pages/OfficeEquipments/Printers/HPs/HPsBuyNow/HPsBuyNow';
import DigitalXs from './Pages/SoundSystem/Speakers/DigitalXs/DigitalXs';
import DigitalXBuyNow from './Pages/SoundSystem/Speakers/DigitalXs/DigitalXBuyNow/DigitalXBuyNow';
import SSDHPS from './Pages/Storages/SSD/SSDHPS/SSDPHS';
import SSDHPBuyNow from './Pages/Storages/SSD/SSDHPS/SSDHPBuyNow/SSDHPBuyNow';
import SSD from './Pages/Storages/SSD/SSD/SSD';
import Speaker from './Pages/SoundSystem/Speakers/Speaker/Speaker';
import Printers from './Pages/OfficeEquipments/Printers/Printers/Printers';



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
        {/* --------------- start Monitors --------------- */}
        <Route path='/monitors' element={<Monitors />} />
        <Route path='monitor-dells' element={<Dells />} />
        <Route path='monitor-dells/:dellId' element={<DellBuyNow />} />
        {/* --------------- end Monitors --------------- */}
        {/* --------------- start Components --------------- */}
        <Route path='/components' element={<Components />} />
        <Route path='/porcessors' element={<Processor />} />
        <Route path='/intels' element={<Intels />} />
        <Route path='/intels/:intelId' element={<IntelBuyNow />} />
        <Route path='/amds' element={<AMDS />} />
        <Route path='/amds/:amdId' element={<AMDBuyNow />} />
        <Route path='/rams' element={<Rams />} />
        <Route path='/ram-adatas' element={<Adatas />} />
        <Route path='/ram-adatas/:ramAdataId' element={<AdataBuyNow />} />
        {/* --------------- end Components --------------- */}
        {/* --------------- start Networking --------------- */}
        <Route path='/router' element={<Router />} />
        <Route path='/tplinks' element={<TPLinks />} />
        <Route path='/tplinks/:tplinkId' element={<TPLinkBuyNow />} />
        {/* --------------- end Networking --------------- */}
        {/* --------------- start Office Equipment --------------- */}
        <Route path='/officeEquipment' element={<OfficeEquipments />} />
        <Route path='/printer' element={<Printers />} />
        <Route path='/printer-hps' element={<HPs />} />
        <Route path='/printer-hps/:printerHpId' element={<HPsBuyNow />} />
        {/* --------------- end Office Equipment --------------- */}
        {/* --------------- start Accessories --------------- */}
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/keyboard' element={<Keyboard />} />
        <Route path='/micropacks' element={<Micropacks />} />
        <Route path='/micropacks/:micropackId' element={<MicropackBuyNow />} />
        <Route path='/mouse' element={<Mouse />} />
        {/* --------------- end Accessories --------------- */}
        {/* --------------- start Security --------------- */}
        <Route path='/security' element={<Security />} />
        <Route path='/security-cc-camera' element={<CcCamera />} />
        <Route path='/hikvisions' element={<Hikvisions />} />
        <Route path='/hikvisions/:hikvisionId' element={<HikvisionsBuyNow />} />
        {/* --------------- end Security --------------- */}
        {/* --------------- Start Storage --------------- */}
        <Route path='/storage' element={<Storages />} />
        <Route path='/ssd' element={<SSD />} />
        <Route path='/ssd-hps' element={<SSDHPS />} />
        <Route path='/ssd-hps/:ssdhpId' element={<SSDHPBuyNow />} />
        {/* --------------- end Storage --------------- */}
        {/* ---------------start sound system --------------- */}
        <Route path='/speaker' element={<Speaker />} />
        <Route path='/speakerDigitalXs' element={<DigitalXs />} />
        <Route path='/speakerDigitalXs/:speakerDigitalXId' element={<DigitalXBuyNow />} />
        {/* -------------- end Sound system --------------- */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

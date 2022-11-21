import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import Home from './pages/Home/Home';
import Units from './pages/Units/Units';
import Currency from './pages/Currency/Currency';

function App() {
  return (
    <div className='lg:flex bg-[#101120]'>
      <Router>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/units' element={<Units />} />
          <Route path='/currency' element={<Currency />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

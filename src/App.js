import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/SideBar/Sidebar';

// url for api : https://exchangeratesapi.io/documentation/
function App() {
  return (
    <div className='container flex bg-[#101120]'>
      <Router>
        <Sidebar />
        <Routes>
          <Route index element={<Dashboard />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

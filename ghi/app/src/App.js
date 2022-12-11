import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import InventoryAddManufacturer from './InventoryAddManufacturer';
import InventoryAddModel from './InventoryAddModel';
import Image  from './/img/dogincar.jpg';

function App() {
  return (
    <div style={{ backgroundImage: "url(/localhost:3000/img/dogincar.png)" }} >
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/InventoryAddManufacturer" element={<InventoryAddManufacturer />} />
          <Route path="/InventoryAddModel" element={<InventoryAddModel />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

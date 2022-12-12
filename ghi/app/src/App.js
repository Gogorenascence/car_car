import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import InventoryAddManufacturer from './InventoryAddManufacturer';
import InventoryManufacturerList from './InventoryManufacturerList';
import InventoryAddModel from './InventoryAddModel';
import InventoryModelList from './InventoryModelList';
// import InventoryAddAutomobile from './InventoryAddAutomobile';
// import InventoryAutomobileList from './InventoryAutomobileList';

import SalesAddAgent from './SalesAddAgent';
import SalesAgentSalesList from './SalesAgentSalesList';
import SalesAddSale from './SalesAddSale';
import SalesSalesList from './SalesSalesList';
import SalesAddCustomer from './SalesAddCustomer';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/InventoryAddManufacturer" element={<InventoryAddManufacturer/>} />
          <Route path="/InventoryManufacturerList" element={<InventoryManufacturerList />} />
          <Route path="/InventoryAddModel" element={<InventoryAddModel/>} />
          <Route path="/InventoryModelList" element={<InventoryModelList />} />
          {/* <Route path="/InventoryAddAutomobile" element={<InventoryAddAutomobile />} />
          <Route path="/InventoryAutomobileList" element={<InventoryAutomobileList />} /> */}
          {/* <Route path="/ServiceAddTech" element={<ServiceAddTech />} />
          <Route path="/ServiceAddAppointment" element={<ServiceAddAppointment />} />
          <Route path="/ServiceAppointmentList" element={<ServiceAppoointmentList />} />
          <Route path="/ServiceAppointmentHistory" element={<ServiceAppointmentHistory />} /> */}
          <Route path="/SalesAddAgent" element={<SalesAddAgent/>} />
          <Route path="/SalesAgentSalesList" element={<SalesAgentSalesList/>} />
          <Route path="/SalesAddSale" element={<SalesAddSale/>} />
          <Route path="/SalesSalesList" element={<SalesSalesList/>} />
          <Route path="/SalesAddCustomer" element={<SalesAddCustomer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

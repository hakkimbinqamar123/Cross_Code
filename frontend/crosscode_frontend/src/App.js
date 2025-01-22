import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Service';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Login from './admin/Login';
// import MainDashboard from './admin/MainDashboard';
// import ClientDetailsTable from './admin/ClientDetailsTable';
// import TestimonialsTable from './admin/TestimonialsTable';
import Dashboard from './admin/Dashboard';
import AddClient from './admin/AddClients';
import ViewAllClients from './components/ViewAllClients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path='navbar' element={<Navbar />} />
        <Route path='footer' element={<Footer />} />
        <Route path='service' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addclients" element={<AddClient />} />
        <Route path="/view-all" element={<ViewAllClients />} />
        {/* <Route path="/clientdetailstable" element={<ClientDetailsTable />} />
        <Route path="/testimonialstable" element={<TestimonialsTable />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

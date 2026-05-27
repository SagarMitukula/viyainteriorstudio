import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Stylists from './components/Stylists';
import StylistDetail from './components/StylistDetail';
import Styles from './components/Styles';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/stylists" element={<Stylists />} />
            <Route path="/stylist/:id" element={<StylistDetail />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PetListings from './pages/PetListings';
import PetDetails from './pages/PetDetails';
import UserProfile from './pages/UserProfile';
import AdminPanel from './pages/AdminPanel';
import Community from './pages/Community';
import Settings from './pages/Settings';
import Login from './pages/Login';  // Import Login page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetListings />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} /> {/* Add this line */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

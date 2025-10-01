import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, Phone, Mail } from 'lucide-react';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation Bar */}
        <div className="bg-teal-700 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone size={14} />
                +1-800-MEDEQUIP
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} />
                support@medequip.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-teal-200 transition">Sell on MedEquip</a>
              <a href="#" className="hover:text-teal-200 transition">Track Order</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Menu className="text-white" size={24} />
                </div>
                <h1 className="text-2xl font-bold text-teal-700">MedEquip<span className="text-emerald-500">Plus</span></h1>
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for medical equipment, instruments, and supplies..."
                    className="w-full px-4 py-3 pr-12 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-500 transition"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 hover:text-teal-600 transition">
                  <User size={24} />
                  <span className="hidden md:inline text-sm">Account</span>
                </button>
                <button className="flex items-center gap-2 hover:text-teal-600 transition">
                  <Heart size={24} />
                  <span className="hidden md:inline text-sm">Wishlist</span>
                </button>
                <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
                  <ShoppingCart size={24} />
                  <span className="hidden md:inline text-sm">Cart (0)</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

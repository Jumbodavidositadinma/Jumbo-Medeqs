import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              MedEquip<span className="text-emerald-500">Plus</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality medical equipment and instruments. Serving healthcare professionals worldwide since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Our Story</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Press & Media</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Certifications</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Track Your Order</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Shipping Information</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Warranty</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                <span>123 Medical Plaza, Healthcare District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <span>+1-800-MEDEQUIP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-teal-500 flex-shrink-0" />
                <span>support@medequip.com</span>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
              <p className="text-white font-semibold">Mon-Fri: 8AM - 8PM EST</p>
              <p className="text-white font-semibold">Sat-Sun: 9AM - 6PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 MedEquipPlus. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

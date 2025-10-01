import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Professional Grade Equipment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Quality Medical Equipment for Healthcare Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Discover our extensive range of certified medical instruments, diagnostic tools, and hospital equipment. Trusted by healthcare facilities worldwide.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center gap-2">
                  Shop Now
                  <ArrowRight size={20} />
                </Link>
                <Link to="/products" className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
                  Browse Catalog
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-700">5000+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-700">99.9%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-700">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center mb-4">
                  <svg className="w-32 h-32 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-700 font-medium">Premium Medical Equipment</div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold">Free Shipping</div>
                <div className="text-xs text-gray-600">On orders over $500</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-teal-600 font-bold">Certified</div>
                <div className="text-xs text-gray-600">FDA Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

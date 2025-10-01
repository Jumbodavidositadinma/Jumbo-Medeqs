import { Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={24} />
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                10% Off on All Stethoscopes This Week!
              </h2>
              <p className="text-lg text-emerald-50 mb-6">
                Premium acoustic and electronic stethoscopes from leading brands. Perfect for medical professionals seeking accuracy and reliability.
              </p>
              <Link to="/products" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
                Shop Stethoscopes Now
              </Link>
            </div>

            {/* Right Content - Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} />
                <span className="font-semibold">Offer ends in:</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">05</div>
                  <div className="text-sm text-emerald-100">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-sm text-emerald-100">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">32</div>
                  <div className="text-sm text-emerald-100">Minutes</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">18</div>
                  <div className="text-sm text-emerald-100">Seconds</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-emerald-100 text-sm">Use code: <span className="font-bold text-white bg-white/20 px-3 py-1 rounded">STETH10</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Professional Acoustic Stethoscope',
    brand: 'MediScope Pro',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 342,
    image: '🩺',
    discount: 10,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Digital Blood Pressure Monitor',
    brand: 'VitalCheck',
    price: 89.99,
    rating: 4.6,
    reviews: 218,
    image: '🩹',
    badge: 'New Arrival'
  },
  {
    id: 3,
    name: 'Surgical Instrument Set (20 pcs)',
    brand: 'PrecisionMed',
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 156,
    image: '✂️',
    discount: 12
  },
  {
    id: 4,
    name: 'Pulse Oximeter with LCD Display',
    brand: 'OxyTrack',
    price: 49.99,
    rating: 4.7,
    reviews: 489,
    image: '📊',
    badge: 'Top Rated'
  },
  {
    id: 5,
    name: 'Medical Examination Light',
    brand: 'BrightCare',
    price: 199.99,
    rating: 4.5,
    reviews: 127,
    image: '💡',
  },
  {
    id: 6,
    name: 'Disposable Face Masks (Box of 50)',
    brand: 'SafeGuard',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.4,
    reviews: 892,
    image: '😷',
    discount: 28
  },
  {
    id: 7,
    name: 'Digital Thermometer (Infrared)',
    brand: 'TempScan',
    price: 39.99,
    rating: 4.6,
    reviews: 534,
    image: '🌡️',
    badge: 'Popular'
  },
  {
    id: 8,
    name: 'Latex Examination Gloves (100 pcs)',
    brand: 'MediTouch',
    price: 18.99,
    rating: 4.7,
    reviews: 671,
    image: '🧤',
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked medical equipment for healthcare professionals</p>
          </div>
          <Link to="/products" className="text-teal-600 font-semibold hover:text-teal-700 transition">
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 h-48 flex items-center justify-center">
                <div className="text-6xl">{product.image}</div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                )}

                {/* Discount */}
                {product.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{product.discount}%
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-50">
                  <Heart size={18} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-10">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-teal-700">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

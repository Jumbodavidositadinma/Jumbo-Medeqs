import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  inStock: boolean;
  bestseller: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group">
      {/* Image Container */}
      <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 h-56 flex items-center justify-center">
        <div className="text-7xl">{product.image}</div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.bestseller && (
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Bestseller
            </div>
          )}
          {!product.inStock && (
            <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Out of Stock
            </div>
          )}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {discount === 0 && (
            <>
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition">
                <Heart size={18} className="text-gray-600 hover:text-red-500" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-teal-50 transition">
                <Eye size={18} className="text-gray-600 hover:text-teal-600" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-teal-600 font-semibold bg-teal-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <span className="text-xs text-gray-500">{product.brand}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 h-12 text-base">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-teal-700">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
            product.inStock
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={18} />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

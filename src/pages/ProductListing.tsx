import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const allProducts = [
  {
    id: 1,
    name: 'Professional Acoustic Stethoscope',
    brand: 'MediScope Pro',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 342,
    category: 'Diagnostics',
    image: '🩺',
    inStock: true,
    bestseller: true
  },
  {
    id: 2,
    name: 'Digital Blood Pressure Monitor',
    brand: 'VitalCheck',
    price: 89.99,
    rating: 4.6,
    reviews: 218,
    category: 'Diagnostics',
    image: '🩹',
    inStock: true,
    bestseller: false
  },
  {
    id: 3,
    name: 'Surgical Instrument Set (20 pcs)',
    brand: 'PrecisionMed',
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 156,
    category: 'Surgical',
    image: '✂️',
    inStock: true,
    bestseller: true
  },
  {
    id: 4,
    name: 'Pulse Oximeter with LCD Display',
    brand: 'OxyTrack',
    price: 49.99,
    rating: 4.7,
    reviews: 489,
    category: 'Diagnostics',
    image: '📊',
    inStock: true,
    bestseller: true
  },
  {
    id: 5,
    name: 'Medical Examination Light',
    brand: 'BrightCare',
    price: 199.99,
    rating: 4.5,
    reviews: 127,
    category: 'Hospital Furniture',
    image: '💡',
    inStock: true,
    bestseller: false
  },
  {
    id: 6,
    name: 'Disposable Face Masks (Box of 50)',
    brand: 'SafeGuard',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.4,
    reviews: 892,
    category: 'PPE',
    image: '😷',
    inStock: true,
    bestseller: false
  },
  {
    id: 7,
    name: 'Digital Thermometer (Infrared)',
    brand: 'TempScan',
    price: 39.99,
    rating: 4.6,
    reviews: 534,
    category: 'Diagnostics',
    image: '🌡️',
    inStock: true,
    bestseller: false
  },
  {
    id: 8,
    name: 'Latex Examination Gloves (100 pcs)',
    brand: 'MediTouch',
    price: 18.99,
    rating: 4.7,
    reviews: 671,
    category: 'PPE',
    image: '🧤',
    inStock: true,
    bestseller: false
  },
  {
    id: 9,
    name: 'Surgical Scalpel Set (10 blades)',
    brand: 'PrecisionCut',
    price: 45.99,
    rating: 4.8,
    reviews: 234,
    category: 'Surgical',
    image: '🔪',
    inStock: true,
    bestseller: false
  },
  {
    id: 10,
    name: 'Laboratory Microscope 1000x',
    brand: 'LabVision',
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.9,
    reviews: 145,
    category: 'Lab',
    image: '🔬',
    inStock: true,
    bestseller: true
  },
  {
    id: 11,
    name: 'Medical Bed with Adjustable Height',
    brand: 'ComfortCare',
    price: 1299.99,
    rating: 4.6,
    reviews: 87,
    category: 'Hospital Furniture',
    image: '🛏️',
    inStock: true,
    bestseller: false
  },
  {
    id: 12,
    name: 'Nitrile Gloves Box (200 pcs)',
    brand: 'ProShield',
    price: 29.99,
    rating: 4.5,
    reviews: 543,
    category: 'PPE',
    image: '🧤',
    inStock: true,
    bestseller: false
  },
  {
    id: 13,
    name: 'ECG Machine 12-Lead',
    brand: 'CardioTech',
    price: 2499.99,
    rating: 4.9,
    reviews: 76,
    category: 'Diagnostics',
    image: '📈',
    inStock: false,
    bestseller: true
  },
  {
    id: 14,
    name: 'Surgical Forceps Set',
    brand: 'PrecisionMed',
    price: 89.99,
    rating: 4.7,
    reviews: 198,
    category: 'Surgical',
    image: '🔧',
    inStock: true,
    bestseller: false
  },
  {
    id: 15,
    name: 'Laboratory Centrifuge',
    brand: 'LabSpin',
    price: 899.99,
    rating: 4.8,
    reviews: 112,
    category: 'Lab',
    image: '⚗️',
    inStock: true,
    bestseller: false
  },
  {
    id: 16,
    name: 'Medical Trolley Cart',
    brand: 'MobileCare',
    price: 349.99,
    rating: 4.6,
    reviews: 156,
    category: 'Hospital Furniture',
    image: '🛒',
    inStock: true,
    bestseller: false
  },
  {
    id: 17,
    name: 'Face Shield (Pack of 10)',
    brand: 'SafeGuard',
    price: 39.99,
    rating: 4.3,
    reviews: 421,
    category: 'PPE',
    image: '🥽',
    inStock: true,
    bestseller: false
  },
  {
    id: 18,
    name: 'Otoscope with LED Light',
    brand: 'EarScope',
    price: 149.99,
    rating: 4.7,
    reviews: 267,
    category: 'Diagnostics',
    image: '🔦',
    inStock: true,
    bestseller: false
  }
];

type SortOption = 'bestselling' | 'price-low' | 'price-high' | 'rating';

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('bestselling');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'bestselling':
      default:
        return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            <a href="/" className="hover:text-teal-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">All Products</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
              selectedCategories={selectedCategories}
              priceRange={priceRange}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Equipment</h1>
                  <p className="text-gray-600">{sortedProducts.length} products found</p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-3">
                  <ArrowUpDown size={20} className="text-gray-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-4 py-2 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-500 bg-white font-semibold text-gray-700"
                  >
                    <option value="bestselling">Bestselling</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

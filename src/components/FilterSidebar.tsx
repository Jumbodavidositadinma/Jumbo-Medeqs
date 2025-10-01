import { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  onCategoryChange: (categories: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
  selectedCategories: string[];
  priceRange: [number, number];
}

const categories = [
  { name: 'Diagnostics', count: 6 },
  { name: 'Surgical', count: 3 },
  { name: 'Lab', count: 2 },
  { name: 'Hospital Furniture', count: 3 },
  { name: 'PPE', count: 4 }
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $300', min: 100, max: 300 },
  { label: '$300 - $1000', min: 300, max: 1000 },
  { label: 'Over $1000', min: 1000, max: 3000 }
];

export default function FilterSidebar({
  onCategoryChange,
  onPriceChange,
  selectedCategories,
  priceRange
}: FilterSidebarProps) {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(updated);
  };

  const handlePriceSelect = (min: number, max: number) => {
    onPriceChange([min, max]);
  };

  const clearFilters = () => {
    onCategoryChange([]);
    onPriceChange([0, 3000]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 3000;

  return (
    <div className="bg-white rounded-lg shadow-sm sticky top-24">
      {/* Header */}
      <div className="p-6 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="text-teal-600" size={20} />
          <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-teal-600 hover:text-teal-700 font-semibold"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="border-b">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
        >
          <h3 className="font-semibold text-gray-900">Category</h3>
          {categoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {categoryOpen && (
          <div className="px-6 pb-6 space-y-3">
            {categories.map((category) => (
              <label
                key={category.name}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => handleCategoryToggle(category.name)}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                  />
                </div>
                <span className="flex-1 text-gray-700 group-hover:text-teal-600 transition">
                  {category.name}
                </span>
                <span className="text-sm text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
        >
          <h3 className="font-semibold text-gray-900">Price Range</h3>
          {priceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {priceOpen && (
          <div className="px-6 pb-6 space-y-3">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handlePriceSelect(range.min, range.max)}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  priceRange[0] === range.min && priceRange[1] === range.max
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Stock Filter */}
      <div className="p-6">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-2 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-gray-700 group-hover:text-teal-600 transition">
            In Stock Only
          </span>
        </label>
      </div>

      {/* Featured Badge */}
      <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-b-lg">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-teal-700 font-bold mb-1">Need Help?</div>
          <p className="text-sm text-gray-600 mb-3">
            Contact our specialists for product recommendations
          </p>
          <button className="w-full bg-teal-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition">
            Chat with Expert
          </button>
        </div>
      </div>
    </div>
  );
}

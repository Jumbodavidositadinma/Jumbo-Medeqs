import { Stethoscope, Activity, Scissors, Bed, TestTube, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Stethoscopes',
    icon: Stethoscope,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    count: '250+ items'
  },
  {
    name: 'Diagnostic Tools',
    icon: Activity,
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    count: '180+ items'
  },
  {
    name: 'Surgical Instruments',
    icon: Scissors,
    color: 'bg-teal-100',
    iconColor: 'text-teal-600',
    count: '320+ items'
  },
  {
    name: 'Hospital Furniture',
    icon: Bed,
    color: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    count: '95+ items'
  },
  {
    name: 'Lab Equipment',
    icon: TestTube,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    count: '210+ items'
  },
  {
    name: 'PPE & Safety',
    icon: Shield,
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    count: '450+ items'
  }
];

export default function Categories() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our wide selection of medical equipment</p>
          </div>
          <Link to="/products" className="text-teal-600 font-semibold hover:text-teal-700 transition">
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              to="/products"
              key={category.name}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`${category.iconColor}`} size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <PromoBanner />
      <FeaturedProducts />
    </main>
  );
}

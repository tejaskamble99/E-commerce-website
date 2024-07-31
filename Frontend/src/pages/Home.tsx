import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const addToCartHandler = () => {
    // Function implementation here
  };

  return (
    <div className='home'>
      <section className='section'></section>

      <h1>
        Latest Product
        <Link to='/search' className='findmore'>
          More
        </Link>
      </h1>
      <main className='main'>
        <ProductCard
          productID='123'
          name='Macbook'
          price={123456}
          stock={4556}
          handler={addToCartHandler}
          photo='media/catalog/product/cache/88160a44f062342c33c0de95969b1545/a/i/air-gold_2.jpeg'
        />
      </main>
    </div>
  );
}

export default Home;

import { useParams, Link } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;
  return (
    <section className='section product'>
      <img src={image} alt='' />
      <h2>{name}</h2>
      <Link to='/products'>Back to products</Link>
    </section>
  );
};

export default SingleProduct;

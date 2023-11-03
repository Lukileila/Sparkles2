/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Breadcrumbs({ singleProduct}) {
  const { name } = useParams();
  const { productId } = useParams();

  if (!singleProduct) {
    return null; 
  }

  return (
    <div className="text-sm breadcrumbs ml-10 mt-8">
      <ul>
        <li>
          <Link to={`/user/${name}`}>Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li className='font-bold'>
          <a href={`/singleproduct/${productId}`}>{singleProduct.Title}</a>
        </li>
      </ul>
    </div>
  );
}

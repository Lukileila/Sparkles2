/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Breadcrumbs({ singleEntry}) {
  const { name } = useParams();

  if (!singleEntry) {
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
          <a href={`/product/${singleEntry.id}`}>{singleEntry.title}</a>
        </li>
      </ul>
    </div>
  );
}

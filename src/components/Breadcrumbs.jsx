import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';

export default function Breadcrumbs({ allEntries }) {
console.log(allEntries);

const {name} = useParams();


  return ( 
    <div className="text-sm breadcrumbs ml-10">
      <ul>
      <li><Link to={`/user/${name}`}>Home</Link></li> 
        <li><Link to="/shop">Shop</Link></li>
        {allEntries.map(({ fields, sys }) => (
          <li key={sys.id} className='font-bold' ><a href={`/product/${sys.id}`}>{fields.title}</a></li>
        ))}
      </ul>
    </div> 
  );
}
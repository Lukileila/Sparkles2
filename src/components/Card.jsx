import logo from '../assets/images/sparkleslogo.png';
import {Link} from 'react-router-dom';

export default function Card(){    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to="/singleproduct">Learn More</Link></button>
          </div>
        </div>
      </div>
    )
}

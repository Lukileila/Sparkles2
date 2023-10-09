import {Link} from 'react-router-dom';

export default function Card(){    
    return (
        
        <div className="card transform hover:scale-105  w-96 bg-base-100 shadow-xl mb-8">
        <figure><img src='https://wallpapers.com/images/hd/comic-book-background-a09lfl6egxpsqgwc.jpg' alt="Shoes" /></figure>
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

import {useParams} from 'react-router-dom';

export default function HeroBanner(){    
const {name} = useParams();

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpapercave.com/wp/wp1829343.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome back to Sparkles Comics Store {name}!</h1>
            <p className="mb-5">Your gateway to a universe where heroes rise, villains fall, and epic adventures await! Immerse yourself in the thrilling world of comics, where every page is a portal to extraordinary realms and daring exploits..</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    )
}

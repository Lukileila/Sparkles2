import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){    

    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogIn = (e) => {
   e.preventDefault();
   navigate(`/user/${name}`);
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h3 className="text-5xl font-bold">Welcome back to <br /> Sparkles Comics Store!</h3>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit " className="btn btn-primary buttonShadow" onClick={handleLogIn}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

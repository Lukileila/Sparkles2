import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const handleSignUp = (e) => {
 e.preventDefault();
 navigate("/");
}

  return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h3 className="text-5xl font-bold">Welcome to <br></br> Sparkles Comics Store!</h3>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
            <input
                type="text"
                placeholder="Enter Your First Name"
                className="input input-bordered w-full max-w-xs text-black placeholder:text-black/70"
              />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full max-w-xs text-black placeholder:text-black/70"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered w-full text-black placeholder:text-black/70"
            />
            <input
              type="text"
              placeholder="Enter Your Phone No"
              className="input input-bordered w-full text-black placeholder:text-black/70"
            />
            <input
              type="Password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full text-black placeholder:text-black/70"
            />
            <div className="flex items-center gap-1.5  justify-start pl-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox-xs checkbox-primary"
                  />
                </label>
              </div>
              <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                I agree to the
                <span className="text-[#4A07DA]">&nbsp;Terms</span>
                &nbsp;and
                <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
              </h3>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div> )
};

export default SignUp;





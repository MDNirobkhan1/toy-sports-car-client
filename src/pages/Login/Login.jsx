import { Link } from 'react-router-dom';
import logo from '../../assets/login.png'

const Login = () => {
    const handleLogin =event =>{
        event.preventDefault();
        
    }
    return (
        <div className="hero min-h-screen h-[400px] bg-base-200 mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login </h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <p className='text-center'>New Toy sports car? <Link to='/signup'><span className='text-orange-600 font-bold'>Sign Up</span></Link></p>
                    <div className='text-center mb-2'>
                        <button className="btn btn-outline btn-accent">Google</button>
                    </div>
                </div>
                <div className="text-center lg:text-left w-1/2 mr-40">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
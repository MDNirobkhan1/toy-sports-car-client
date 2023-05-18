import { Link } from 'react-router-dom';
import logo from '../../assets/login.png'

const SignIn = () => {
    const handleSignUp=event =>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen h-[400px] bg-base-200 mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Please Sign In</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignIn" />
                            </div>
                        </form>
                    </div>
                    <p className='text-center mb-2'>Already have an account? <Link to='/login'><span className='text-orange-600 font-bold'>Login</span></Link></p>
                </div>
                <div className="text-center lg:text-left w-1/2 mr-40">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
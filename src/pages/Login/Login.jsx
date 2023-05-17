import logo from '../../assets/login.png'

const Login = () => {
    return (
        <div className="hero min-h-screen h-[400px] bg-base-200 mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
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
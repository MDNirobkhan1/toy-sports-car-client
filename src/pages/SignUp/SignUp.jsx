import { Link } from 'react-router-dom';
import logo from '../../assets/login.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(name, photo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error))
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
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
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

export default SignUp;
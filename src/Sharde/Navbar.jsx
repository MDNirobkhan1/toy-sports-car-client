/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import logo from '../assets/car.jpg'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const { user, logOut, } = useContext(AuthContext);
    // console.log("🚀 ~ file: Navbar.jsx:9 ~ Navbar ~ user:", user)

    console.log(user?.displayName);
    console.log(user?.photoURL);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    const navitems = <>

        {
            user?.uid ? <> <Link to='/'><li><a>Home</a></li></Link>
                <Link to='/allToy'><li><a>All Toys</a></li></Link>
                <Link to={'myToys'}><li><a>My Toys</a></li></Link>
                <Link to='/addToyCar'><li><a>Add A Toy</a></li></Link>
                 </> : <>

                <Link to='/'><li><a>Home</a></li></Link>
                
            </>
        }


    </>
    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </a>
                <h3 className='font-bold text-xl'>Toy Sports Car</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <><button onClick={handleLogout} className="btn btn-active btn-secondary">LogOut</button>

                        <div className="tooltip tooltip-bottom avatar cursor-pointer" data-tip={user?.displayName}>
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} alt='avatar' />
                            </div>
                        </div>

                    </> : <><Link to='/login'><button className="btn btn-success mr-2">Login</button></Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;
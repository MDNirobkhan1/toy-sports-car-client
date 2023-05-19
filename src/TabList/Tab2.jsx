/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Tab2 = ({car}) => {
    const { _id, name, price, img, rating } = car
    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 mb-2">
        <figure><img className="w-96 rounded-xl" src={img} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <Link to='/details'><button className="btn btn-primary">View Details </button></Link>
        </div>
    </div>
    );
};

export default Tab2;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState({});
    console.log(id);
    
    useEffect(() => {
        fetch(`http://localhost:5000/regu-spo/${id}`)
        .then(res => res.json())
        .then(data => setCarDetails(data))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:5000/toy-car/${id}`)
        .then(res => res.json())
        .then(data => setCarDetails(data))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:5000/police-car/${id}`)
        .then(res => res.json())
        .then(data => setCarDetails(data))
    }, [id])

    console.log("🚀 ~ file: Details.jsx:8 ~ Details ~ carDetails:", carDetails)

    const { price, name, rating, img, details } = carDetails;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{details}</p>
                    <p>rating: {rating}</p>
                    <p>price: {price}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
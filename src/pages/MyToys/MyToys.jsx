/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addToy, setAddToy] = useState([]);
    const url = `https://assignment-11-server-tan.vercel.app/addToToy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToy(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller:Name</th>
                            <th>Sub-category </th>
                            <th>Price </th>
                            <th>rating </th>
                            <th>Available Quantity </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            addToy?.map(toy => <tr key={toy._id}>
                                <td>
                                    {toy.name}
                                </td>
                                <td>{toy.category}</td>
                                <td>{toy.pricea}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.quantity}</td>
                                
                            </tr>
                            
                            )
                            
                        }

                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;
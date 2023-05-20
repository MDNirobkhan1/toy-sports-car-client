import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const AddToy = () => {
    const {user}= useContext(AuthContext)

    const handleAddToy=event=>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const selller =form.seller.value;
        const sellerEmail = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity= form.quantity.value;
        console.log(photo,name, selller, sellerEmail, category, price,rating,quantity);
    }
    return (
        <div>

            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2 rounded-lg mt-2 p-20 bg-green-200 w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                         </label>
                        <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="name" defaultValue={user?.displayName} name="seller" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" placeholder="category" name="category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="rating" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="details" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6 w-1/2 mx-auto">
                    <input className="btn btn-primary" type="submit" value="Add To Toy" />
                </div>
            </form>
            <div className="card-body">
            </div>

        </div>
    );
};

export default AddToy;
import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>The Questions answer</h1>
            <div className="bg-slate-600 p-4 text-white mt-8">
                <p className='bg-green-300 bg-opacity-75 p-4 rounded-xl'>
                    <h5>1. What is an access token and refresh token? How do they work and where should we store them on the client-side ?</h5> <br />
                    Ans: In OAuth 2.0, JWT can be used as an access token and/or a refresh token. Access tokens are used to access protected resources, such as an API,  .
                </p>
                <p className='bg-green-400 bg-opacity-50 p-4 rounded-xl'>
                    <h5>2. Compare SQL and NoSQL databases ?</h5> <br />
                    Ans: SQL databases are primarily called Relational Databases (RDBMS); whereas NoSQL databases are primarily called non-relational or distribute.
                </p>
                <p className='bg-green-500 bg-opacity-25 p-4 rounded-xl'>
                    <h5>3. What is express js? What is Nest JS ?</h5> <br />
                    Ans: It means Express gives developers the freedom to make multiple possibilities and implement code as per the need, as it doesn t have a set of pre ..,
                </p>
                <p className='bg-green-600 bg-opacity-10 p-4 rounded-xl'>
                    <h5>4. What is MongoDB aggregate and how does it work ?</h5> <br />
                    Ans: The aggregation pipeline allows you to perform complex operations that will allow any range of insights into your collections. There are dozens of pipeline  .
                </p>
                <Link to='/'><button className="btn btn-warning">See Home page</button></Link>
            </div>

        </div>
    );
};

export default Blog;
import { Link } from "react-router-dom";


const Errorpage = () => {
    const url=('https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg?w=740&t=st=1684362669~exp=1684363269~hmac=20ba28d6f4199079644ab020a5de4937c7c434ad46c1fe06d63ed72d5cdc7693')
    return (
        <div>
            <div className='grid justify-center text-center'>
                <img className=' w-96 ' src={url} alt="" />
                <p className='text-2xl'>This page doesnt exist!</p>
                <p className='font-bold text-6xl'>404</p>
                <p className='text-3xl'>Error</p>
                <Link to='/'><button className='text-gray-100 font-bold rounded-md mt-2 p-2 bg-blue-400'>Pleaes Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;
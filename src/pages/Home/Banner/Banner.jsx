
import car1 from '../../../assets/car-1.jpg'
import car2 from '../../../assets/car-2.jpg'
import car3 from '../../../assets/car-3.jpg'
import car4 from '../../../assets/car-4.jpg'
import car5 from '../../../assets/car-5.jpg'
import car6 from '../../../assets/car-6.jpg'
const Banner = () => {
    return (
        <div className='mt-4'>
            <div className="carousel w-full h-[500px]">
                <div id="item1" className="carousel-item relative w-full">
                    <img className=' rounded-xl' src={car1} alt="" />
                    <div className=' absolute rounded-xl h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'>Collectible Toy Sport <br /> Car Model Top View Stock</h1>
                            <p>Toy Sports Car Transforming Robot Remote <br /> Control with One Button Transformation, <br /> Realistic Engine Sounds, 360 Speed Drifting, Sword and Shield Included .</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-xl' src={car4} alt="" />
                        </div>

                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={car2} alt="" />
                    <div className='absolute rounded-xl h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'>Collectible Toy Sport <br /> Car Model Top View Stock</h1>
                            <p>Toy Sports Car Transforming Robot Remote <br /> Control with One Button Transformation, <br /> Realistic Engine Sounds, 360 Speed Drifting, Sword and Shield Included .</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-xl' src={car5} alt="" />
                        </div>

                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={car3} alt="" />
                    <div className='absolute rounded-xl h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'>Collectible Toy Sport <br /> Car Model Top View Stock</h1>
                            <p>Toy Sports Car Transforming Robot Remote <br /> Control with One Button Transformation, <br /> Realistic Engine Sounds, 360 Speed Drifting, Sword and Shield Included .</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-xl' src={car6} alt="" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;
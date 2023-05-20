import { useEffect, useState, } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

function ShopCategory() {
    const [reguSpo, setReguSpo] = useState([]);
    const [toy, setToy] = useState([]);
    const [policeCar, setPoliceCar] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-tan.vercel.app/regu-spo')
            .then(res => res.json())
            .then(data => setReguSpo(data))
    }, [])

    useEffect(() => {
        fetch('https://assignment-11-server-tan.vercel.app/toy-car')
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])
    useEffect(() => {
        fetch('https://assignment-11-server-tan.vercel.app/police-car')
            .then(res => res.json())
            .then(data => setPoliceCar(data))
    }, [])
    // console.log("🚀 ~ file: ShopCategory.jsx:7 ~ ShopCategory ~ toy:", toy)
    return (
        <div>
            <Tabs>
                <div className='text-center bg-red-300 font-bold text-3xl mb-10 mt-10'>
                <h1>The Shop Category Car</h1>
                </div>
                <TabList className='flex justify-center'>
                    <Tab>Sports car</Tab>
                    <Tab>Mini fire truck</Tab>
                    <Tab>Mini police car</Tab>
                </TabList>

                <div className='flex justify-center'>
                    <TabPanel>
                        {
                            reguSpo.map(car => <Tab1
                                key={car._id}
                                car={car}
                            ></Tab1>)
                        }
                    </TabPanel>
                </div>
                <div className='flex justify-center'>
                    <TabPanel>
                        {
                            toy.map(car => <Tab2
                                key={car._id}
                                car={car}
                            ></Tab2>)
                        }
                    </TabPanel>
                </div>
                <div className='flex justify-center'>
                    <TabPanel>
                        {
                            policeCar.map(car => <Tab3
                                key={car._id}
                                car={car}
                            ></Tab3>)
                        }
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
}

export default ShopCategory;

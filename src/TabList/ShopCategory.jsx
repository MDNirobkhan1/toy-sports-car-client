import { useEffect, useState, } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ShopCategory() {
    const [reguSpo, setReguSpo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/regu-spo')
        .then(res => res.json())
        .then(data => setReguSpo(data))
    }, [])
    const [toy, setToy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toy-car')
        .then(res => res.json())
        .then(data => setToy(data))
    }, [])
    console.log("🚀 ~ file: ShopCategory.jsx:7 ~ ShopCategory ~ toy:", toy)
    return (
        <div>
            <Tabs>
                <TabList className='flex justify-center'>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>

                <TabPanel>
                   {
                    reguSpo.map( car => <div key={car._id}>
                        <li>{car.name}</li>
                        <img className='h-10 w-10 z-40' src={car.img} alt="" />
                    </div>)
                   }
                </TabPanel>
                <TabPanel>
                {
                    toy.map( car => <div key={car._id}>
                        <li>{car.name}</li>
                        <img className='h-10 w-10 z-40' src={car.img} alt="" />
                    </div>)
                   }
                </TabPanel>
                <TabPanel>
                    <h2>Content for Tab 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default ShopCategory;

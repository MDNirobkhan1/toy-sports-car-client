import { useEffect, useState, } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

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
                    <Tab>Sports car</Tab>
                    <Tab>Mini fire truck</Tab>
                    <Tab>Mini police car</Tab>
                </TabList>

                <TabPanel>
                   {
                    reguSpo.map( car => <Tab1 
                    key={car._id}
                    car={car}
                    ></Tab1>)
                   }
                </TabPanel>
                <TabPanel>
                {
                    toy.map( car =><Tab2
                        key={car._id}
                        car={car}
                    ></Tab2> )
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

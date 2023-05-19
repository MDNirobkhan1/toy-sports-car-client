import ShopCategory from "../../../TabList/ShopCategory";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <ShopCategory />
        </div>
    );
};

export default Home;
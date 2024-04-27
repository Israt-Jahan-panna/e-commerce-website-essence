import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ShopByDepartment from "../Shop by Department/ShopByDepartment"
import DealOfTheDay from '../Deal of The Day/DealOfTheDay';
const Home = () => {
    
  
    return (
      <div className="mx-auto font-Inter">
       <NavBar></NavBar>
       <Events></Events>
      <Banner></Banner>
      <div className="lg:px-14">
      <ShopByDepartment></ShopByDepartment>
      <DealOfTheDay></DealOfTheDay>
      </div>
      <Footer></Footer>
      </div>
    );
  };
  
  export default Home;
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ShopByDepartment from "../Shop by Department/ShopByDepartment"

const Home = () => {
    
  
    return (
      <div className="mx-auto font-Inter">
       <NavBar></NavBar>
       <Events></Events>
      <Banner></Banner>
      <ShopByDepartment></ShopByDepartment>
      <Footer></Footer>
      </div>
    );
  };
  
  export default Home;
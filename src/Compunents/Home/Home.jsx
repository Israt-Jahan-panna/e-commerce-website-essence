import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ShopByDepartment from "../Shop by Department/ShopByDepartment"
import DealOfTheDay from '../Deal of The Day/DealOfTheDay';
import OnSellingProducts from "../On Selling Products/OnSellingProducts";
import OnSellingProductsAds from "../On Selling Products/OnSellingProductsAds";
import Apple from '../Apple/Apple';
import ShopAllCategories from "../Shop All Categories/ShopAllCategories"
import MostViewedItems from '../Most Viewed Items/MostViewedItems';
import TopBrands from '../Top Brands/TopBrands';
const Home = () => {
    
  
    return (
      <div className="mx-auto font-Inter">
       <NavBar></NavBar>
       <Events></Events>
      <Banner></Banner>
      <div className="lg:px-14">
      <ShopByDepartment></ShopByDepartment>
      <DealOfTheDay></DealOfTheDay>
      <OnSellingProducts></OnSellingProducts>
      <OnSellingProductsAds></OnSellingProductsAds>
      <Apple></Apple>
    <ShopAllCategories></ShopAllCategories>
    <MostViewedItems></MostViewedItems>
    <TopBrands></TopBrands>
      </div>
      <Footer></Footer>
      </div>
    );
  };
  
  export default Home;
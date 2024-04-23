import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    
  
    return (
      <div className="mx-auto font-Inter">
       <NavBar></NavBar>
       <Events></Events>
      <Banner></Banner>
      </div>
    );
  };
  
  export default Home;
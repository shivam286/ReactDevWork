import "antd/dist/antd.css";
import CarouselDisplay from "../../component/CarouselDisplay";
import NavBar from "../../component/navigationBar/NavBar";



function HomePage() {
  return (
    <div className="App container py-3">
      <NavBar></NavBar>
      <CarouselDisplay></CarouselDisplay>
    </div>
  );
}

export default HomePage;

import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Imgslider from "react-simple-image-slider"

function App() {
const sliderImages = [{url:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"},{url:"https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/insurance-claim-flood-desk.png"}]
  return (
    <div className="App">

     <Banner />
     <Imgslider style={{position:"relative",left:"500px"}}
    //  width = {500}
    //  height = {250}
      images = {sliderImages}
      showNavs ={true}
    //  position = {relative}
    //  left = {500}
     />
     {/* <Carousel /> */}
    </div>
  );
}

export default App;


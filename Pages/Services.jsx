import Card2 from "../Components/Card2.jsx";
import Card from "../Components/Card.jsx";
import Likebutton from "../Components/Likebutton.jsx";
import Button from "../Components/Button.jsx";
import img1 from '../src/assets/printing.jpeg'
import img2 from '../src/assets/branding.png'
import * as data from '../src/var.jsx'

function Services() {
  return (
    <div className="Section1">
      <h1>Services</h1>
      <div className="cardCont">
        <Card2 image={img1} title={data.card1title} det="Need to bring your ideas to life on paper? Look no further! We offer a comprehensive range of high-quality printing services to meet all your personal and professional needs. From vibrant marketing materials to personalized stationery, we're dedicated to delivering exceptional results with speed and precision. Explore our services below and let's get printing!" />
        <Card2 image={img2} title="Branding Services" det={data.card2det} />
        <Card2
          image={img1}
          title="Computer & General Services"
          det={data.card3det}
        />
      </div>
    </div>
  );
}

export default Services;

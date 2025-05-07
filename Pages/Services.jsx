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
        <Card2 image={img1} title={data.card1title} det="Welcome, we are pleased you have decided to learn more." />
        <Card2 image={img2} title="Branding Services" det={data.card2det} />
        <Card
          image={img1}
          title="Computer & General Services"
          det={data.card3det}
        />
      </div>
    </div>
  );
}

export default Services;

import Intro from '../Components/Intro.jsx' 
import Card from '../Components/Card.jsx'
import Footer from '../Components/Footer.jsx'
import Likebutton from '../Components/Likebutton.jsx'
import Button from '../Components/Button.jsx'
import img1 from '../src/assets/printing.jpeg'
import img2 from '../src/assets/branding.png'
import img3 from '../src/assets/website.png'
import * as data from '../src/var.jsx'

function Home(){
  return(
    <>
    <div className='Section'><Intro/></div>

    <div className='Section1'>
      <h1>Services</h1>
      <div className='cardCont'>
      <Card image={img1} title={data.card1title} det={data.card1det}/>
      <Card image={img2} title="Branding Services" det={data.card2det}/>
      <Card image={img3} title="Computer & General Services" det={data.card3det}/>
      </div>
      
      <div className='navbutton'><Button/></div>
    </div>
   <div className='Section'>
      <h1>About</h1>
      <Likebutton/>
    </div>
    </>
  );
}

export default Home
import img1 from '../src/assets/website.png'
function Card(props){
    return(
        <div className="Card">
            <img className='Card-img' src={props.image} alt="Services"></img>
            <h2 className="Card-title" >{props.title}</h2>
            <p className="Card-des">{props.det}</p>
        </div>
    );
}

export default Card
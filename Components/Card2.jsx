function Card2(props) {
  return (
    <div className="Card2">
      <h2 className="Card-title">{props.title}</h2>
      <img className="Card-img" src={props.image} alt="Services"></img>
      <p className="Card-des">{props.det}</p>
    </div>
  );
}

export default Card2;

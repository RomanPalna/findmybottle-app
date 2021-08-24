import whisky from "../whisky.json";

const whiskyItem = whisky[0];

export default function Alcohol() {
  return (
    <div>
      <img src={whiskyItem.imgUrl} alt={whiskyItem.name}></img>
      <h2>{whiskyItem.name}</h2>
      <p>Litres: {whiskyItem.liters}</p>
      <p>Price: {whiskyItem.price}</p>
    </div>
  );
}

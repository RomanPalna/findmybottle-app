import whisky from "../whisky.json";

export default function Alcohol() {
  return whisky.map((item) => (
    <div>
      <img src={item.imgUrl} alt={item.name}></img>
      <h2>{item.name}</h2>
      <p>Litres: {item.liters}</p>
      <p>Price: {item.price}</p>
    </div>
  ));
}

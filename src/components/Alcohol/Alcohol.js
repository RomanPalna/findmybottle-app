import whisky from "../../whisky.json";

export default function Alcohol() {
  return whisky.map((item) => (
    <li key={item.id}>
      <p>{item.name}</p>
      <p>Litres: {item.liters}</p>
      <p>Price: {item.price}</p>
      <input type="number"></input>
    </li>
  ));
}

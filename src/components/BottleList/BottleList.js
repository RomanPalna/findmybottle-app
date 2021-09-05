export default function BottleList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>Name: {item.name}</p>
          <p>Litres: {item.liters} </p>
          <p>Price: {item.price} </p>
          <p>Quantity: {item.quantity} </p>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default function BottleList({ items, onDelete }) {
  console.log(items);
  return (
    <div>
      <p>Кількість найменувань: {items.length}</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Litres: {item.liters} </p>
            <p>Price: {item.price} </p>
            <p>Quantity: {item.quantity} </p>
            <button type="button" onClick={() => onDelete(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

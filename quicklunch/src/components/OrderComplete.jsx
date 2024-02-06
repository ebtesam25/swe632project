export default function OrderComplete() {
  const order = {
    id: 12345,
    items: [
      { name: 'Pizza', quantity: 1, price: 12.99 },
      { name: 'Salad', quantity: 2, price: 7.99 },
    ],
    total: 28.97,
  };

  return (
    <div>
      <h1>Your Order is Complete!</h1>
      <div>
        <h2>Order ID: {order.id}</h2>
        <h3>Order Details:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${order.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
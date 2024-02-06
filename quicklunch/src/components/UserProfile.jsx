export default function UserProfile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    orders: [
      { id: 1, date: '2024-02-06', total: 25.99 },
      { id: 2, date: '2024-02-04', total: 34.50 },
    ],
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
        <p>Phone: {user.phone}</p>
        <h3>Order History:</h3>
        <ul>
          {user.orders.map(order => (
            <li key={order.id}>
              Order ID: {order.id} - Date: {order.date} - Total: ${order.total}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
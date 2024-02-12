import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
} from '../redux/userSlice';
export default function OrderComplete() {
  const order = {
    id: 1001,
    items: [
      { name: 'Pizza', quantity: 1, price: 12.99 },
    ],
    total: 12.99,
  };
  const dispatch = useDispatch();
    const userSelector = useSelector(state => state.user.users);

  return (
    <div className="px-10">
      <div>
        <div className="my-10"></div>
        <h2 className="font-bold">Order ID: {order.id}</h2>
        <h3>Order Summary:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="my-10"></div>
        <p className="font-bold text-xl mb-10">Total: ${order.total.toFixed(2)}</p>
        <h1 className="font-bold text-xl">Thank you for your order!</h1>
        <p className="italic">We will text you {userSelector[0].phone?"at "+userSelector[0].phone.toString():""} when your order is ready.</p>
      </div>
    </div>
  );
}
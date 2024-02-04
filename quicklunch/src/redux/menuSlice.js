import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    pizzas: [], // This should be in your initial state
  };

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    pizzas: [{crust:'',sauce:'',toppings:[],drizzles:[]}], // Array to hold multiple pizza orders
  },
  reducers: {
    addPizza: (state, action) => {
      // Add a new pizza order to the array
      state.pizzas.push({
        crust: '',
        sauce: '',
        toppings: [], // Each topping will have a name and quantity
      });
    },
    setCrust: (state, action) => {
      const { pizzaIndex, crust } = action.payload;
      state.pizzas[pizzaIndex].crust = crust;
    },
    setSauce: (state, action) => {
      const { pizzaIndex, sauce } = action.payload;
      state.pizzas[pizzaIndex].sauce = sauce;
    },
    addTopping: (state, action) => {
      const { pizzaIndex, topping } = action.payload;
      state.pizzas[pizzaIndex].toppings.push(topping);
    },
    removeTopping: (state, action) => {
      const { pizzaIndex, toppingName } = action.payload;
      state.pizzas[pizzaIndex].toppings = state.pizzas[pizzaIndex].toppings.filter(
        topping => topping.name !== toppingName
      );
    },
    addDrizzle: (state, action) => {
      const { pizzaIndex, drizzle } = action.payload;
      state.pizzas[pizzaIndex].drizzles.push(drizzle);
    },
    removeDrizzle: (state, action) => {
      const { pizzaIndex, drizzleName } = action.payload;
      state.pizzas[pizzaIndex].drizzles = state.pizzas[pizzaIndex].drizzles.filter(
        drizzle => drizzle.name !== drizzleName
      );
    },
    updateToppingQuantity: (state, action) => {
      const { pizzaIndex, toppingName, quantity } = action.payload;
      const topping = state.pizzas[pizzaIndex].toppings.find(
        t => t.name === toppingName
      );
      if (topping) {
        topping.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const {
  addPizza,
  setCrust,
  setSauce,
  addTopping,
  removeTopping,
  addDrizzle,
  removeDrizzle,
  updateToppingQuantity,
} = orderSlice.actions;

// Export the reducer
export default orderSlice.reducer;

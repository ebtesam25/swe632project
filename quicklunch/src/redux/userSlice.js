import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [{name: '', phone: '', password: '', paleo: '', keto: '', vegan: '', peanuts: '', shellfish: '', gluten: '', orders:[]}]
    },
  reducers: {
    addUser: (state, action) => {
        const { name, phone, password, vegan, paleo, keto, peanuts, shellfish, gluten } = action.payload;
        console.log("got user details...")
        console.log(name, phone, password, vegan, paleo, keto, peanuts, shellfish, gluten);
        console.log(state.users);
        if (state.users[0].name === "") { state.users.pop(); }
        state.users.push({
            name: name,
            phone: phone,
            password: password,
            vegan: vegan,
            paleo: paleo,
            keto: keto,
            peanuts: peanuts,
            shellfish: shellfish,
            gluten: gluten,
            orders: []
          
        });

        const currentState = current(state);
        console.log(currentState);

      },
      addOrder: (state, action) => {
        const { userIndex, order } = action.payload;
        state.users[userIndex].orders.push(order);
      },      
  },
});

export const selectAllUsers = (state) => state.user.users;

export const { addUser, addOrder } = userSlice.actions;

export default userSlice.reducer;

const initialState = {
  name: "Bob",
  age: 23,
  country: {
    id: 35,
    name: "Brazil",
    adress: {
      zipCode: 12345678,
    },
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;

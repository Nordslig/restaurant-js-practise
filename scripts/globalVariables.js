const dishes = [
  {
    id: "d1",
    name: "Kiełba",
    price: 10,
    type: "grill",
  },
  {
    id: "d2",
    name: "Kiełba better",
    price: 15,
    type: "grill",
  },
  {
    id: "d3",
    name: "Kiełba the best",
    price: 20,
    type: "grill",
  },
  {
    id: "d4",
    name: "Pizza",
    price: 40,
    type: "dish",
  },
];

const sides = {
  sauces: [
    {
      name: "Tatar",
      price: 3,
    },
    {
      name: "Garlic",
      price: 3,
    },
    {
      name: "Honey-mustard",
      price: 5,
    },
    {
      name: "Cheese",
      price: 5,
    },
  ],
  sideDishes: [
    { name: "Chips", price: 8 },
    { name: "Rice", price: 6 },
  ],
};

const drinks = {
  soda: [
    { name: "Pepsi", price: 10 },
    { name: "Cola", price: 10 },
    { name: "Coke", price: 500 },
  ],
  alcohol: [
    { name: "Beer", price: 6 },
    { name: "Trans Beer", price: 9 },
  ],
};

const cart = [];

const users = [
  {
    id: 1,
    email: "test@test.com",
    password: "1234",
  },
  {
    id: 2,
    email: "test2@test.com",
    password: "1234",
  },
];

const currentUser = {
  id: "",
  email: "",
  password: "",
};

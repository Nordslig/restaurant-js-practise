const cartList = document.querySelector(".cartList");
const divCart = document.querySelector("div.cart");

const showCart = () => {
  if (cart.length > 0) {
    cartList.innerHTML = "";

    cart.forEach((item) => {
      const { dishName, dishPrice, quantity } = item;

      const li = document.createElement("li");

      const itemName = document.createElement("p");
      itemName.textContent = dishName;

      const itemPrice = document.createElement("p");
      itemPrice.textContent = dishPrice;

      const itemQuantity = document.createElement("p");
      itemQuantity.textContent = quantity;

      li.append(itemName, itemPrice, itemQuantity);
      cartList.append(li);
    });
  } else {
    const p = document.createElement("p");
    p.textContent = "You have no items in cart yet.";

    divCart.append(p);
  }
};

const cartList = document.querySelector(".cartList");
const divCart = document.querySelector("div.cart");

console.log(cart);

const showCart = () => {
  if (cart.length > 0) {
    cart.forEach((item) => {
      const { id, dName, dPrice } = item;

      const li = document.createElement("li");
      const pName = document.createElement("p");
      pName.textContent = dName;
      const pPrice = document.createElement("p");
      pPrice.textContent = dPrice;

      li.append(pName, pPrice);
      cartList.append(li);
      // console.log(id, dName, dPrice);
    });
  } else {
    const p = document.createElement("p");
    p.textContent = "You have no items in cart yet.";
    divCart.append(p);
  }

  // cart.forEach((item) => {
  //   const { id, dName, dPrice } = item;

  //   const li = document.createElement("li");
  //   const pName = document.createElement("p");
  //   p.textContent = dName
  //   const pPrice = document.createElement("p");
  //   pPrice.textContent = dPrice

  //   li.append(pName, pPrice);
  //       cartList.append(li);
  //   // console.log(id, dName, dPrice);
  // });
};

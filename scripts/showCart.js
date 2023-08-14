const cartList = document.querySelector(".cartList");
const divCart = document.querySelector("div.cart");

const showCart = () => {
  cartList.innerHTML = "";

  if (cart.length > 0) {
    cart.forEach((item) => {
      const { dishName, dishPrice, quantity } = item;

      let newQuan = quantity;

      const li = document.createElement("li");

      const itemName = document.createElement("p");
      itemName.textContent = dishName;

      const itemPrice = document.createElement("p");
      itemPrice.textContent = dishPrice;

      const itemQuantity = document.createElement("p");
      itemQuantity.textContent = newQuan;

      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "substract");
      btnDelete.textContent = "-";

      btnDelete.addEventListener("click", () => {
        newQuan--;
        itemQuantity.textContent = newQuan;

        if (newQuan === 0) {
          const removedItemIdx = cart.indexOf(
            (item) => item.dishName === itemName
          );

          li.remove(itemName, itemPrice, itemQuantity, btnDelete);

          cart.splice(removedItemIdx, 1);

          if (cart.length === 0) {
            emptyCartText();
          }
        }
      });

      li.append(itemName, itemPrice, itemQuantity, btnDelete);
      cartList.append(li);
    });
  } else {
    emptyCartText();
  }
};

const emptyCartText = () => {
  const p = document.createElement("p");
  p.textContent = "You have no items in cart yet.";

  cartList.append(p);
};

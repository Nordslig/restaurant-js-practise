const cartList = document.querySelector(".cartList");
const divCart = document.querySelector("div.cart");

const showCart = () => {
  cartList.innerHTML = "";

  const fullPriceP = document.createElement("p");

  let fullPrice = 0;

  fullPriceP.textContent = fullPrice;

  if (cart.length > 0) {
    cart.forEach(({ dishName, dishPrice, quantity }) => {
      const li = document.createElement("li");

      const itemName = document.createElement("p");
      itemName.textContent = dishName;

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `${dishPrice} zł`;

      fullPrice += dishPrice;

      if (quantity > 1) {
        for (let i = 1; i < quantity; i++) {
          fullPrice += dishPrice;
        }
      }

      fullPriceP.textContent = fullPrice;

      const itemQuantity = document.createElement("p");
      itemQuantity.textContent = quantity;

      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "substract");
      btnDelete.textContent = "-";

      btnDelete.addEventListener("click", () => {
        const subItem = cart.find(
          ({ dishName }) => dishName === itemName.textContent
        );

        subItem.quantity--;

        fullPrice -= dishPrice;

        fullPriceP.textContent = fullPrice;

        itemQuantity.textContent = subItem.quantity;

        if (subItem.quantity === 0) {
          const removedItemIdx = cart.findIndex(
            (item) => item.dishName === itemName.textContent
          );

          li.remove(itemName, itemPrice, itemQuantity, btnDelete);

          cart.splice(removedItemIdx, 1);

          if (cart.length === 0) {
            emptyCartText(fullPriceP);
          }
        }
        return;
      });

      li.append(itemName, itemPrice, itemQuantity, btnDelete);
      cartList.append(li, fullPriceP);
    });
  } else {
    emptyCartText(fullPriceP);
  }
};

const emptyCartText = (fullPriceP) => {
  const p = document.createElement("p");
  p.textContent = "You have no items in cart yet.";

  cartList.append(fullPriceP, p);
};

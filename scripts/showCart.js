const cartList = document.querySelector(".cartList");
const divCart = document.querySelector("div.cart");

const showCart = () => {
  cartList.innerHTML = "";

  const fullPriceP = document.createElement("p");

  let fullPrice = 0;

  fullPriceP.textContent = fullPrice;

  if (cart.length > 0) {
    cart.forEach(({ dishName, dishPrice, quantity, type, addInfo }) => {
      const li = document.createElement("li");

      const itemName = document.createElement("p");
      itemName.textContent += dishName;

      let itemAddInfo = document.createElement("p");

      if (type === "dish") {
        addInfo.forEach((aInf, i) => {
          itemAddInfo.textContent += `${aInf.sauce}${
            i === addInfo.length ? "," : ""
          }`;
        });
        itemAddInfo.style.display = "block";
      }

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

      const btnAdd = document.createElement("button");
      btnAdd.classList.add("btn", "add");
      btnAdd.textContent = "+";

      btnAdd.addEventListener("click", () => {
        const subItem = cart.find(
          ({ dishName }) => dishName === itemName.textContent
        );

        subItem.quantity++;

        fullPrice += dishPrice;

        fullPriceP.textContent = fullPrice;

        itemQuantity.textContent = subItem.quantity;
      });

      btnDelete.addEventListener("click", () => {
        let subItem;

        if (type === "dish") {
          const aInfo = addInfo.find((item) => item);

          subItem = cart.find(
            (item) =>
              item.dishName === dishName &&
              item.addInfo.find((item) => item.sauce === aInfo.sauce)
          );
        } else {
          subItem = cart.find(
            ({ dishName }) => dishName === itemName.textContent
          );
        }

        subItem.quantity--;

        fullPrice -= dishPrice;

        fullPriceP.textContent = fullPrice;

        itemQuantity.textContent = subItem.quantity;

        if (subItem.quantity === 0) {
          const removedItemIdx = cart.findIndex(
            (item) => item.dishName === itemName.textContent
          );

          li.remove(itemName, itemPrice, itemQuantity, btnAdd, btnDelete);

          cart.splice(removedItemIdx, 1);

          if (cart.length === 0) {
            emptyCartText(fullPriceP);
          }
        }
        return;
      });

      li.append(
        itemName,
        itemPrice,
        itemAddInfo,
        itemQuantity,
        btnAdd,
        btnDelete
      );
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

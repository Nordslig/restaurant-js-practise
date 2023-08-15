const btnShowDishes = document.querySelector(".btn.showDishes");
const mainSec = document.querySelector(".mainSec.menu");
const dishList = document.querySelector(".menu.dishList");

const showDishes = () => {
  dishList.innerHTML = "";
  dishes.forEach((dish) => {
    const { name, price, type } = dish;

    const li = document.createElement("li");

    const dishName = document.createElement("p");
    dishName.textContent = name;

    const dishPrice = document.createElement("p");
    dishPrice.textContent = ` ${price} zł`;

    const btn = document.createElement("button");
    btn.textContent = "Dodaj";
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
      if (type === "dish") {
        sides.sauces.forEach(({ name, price }) => {
          const sideDiv = document.createElement("div");
          sideDiv.style.display = "flex";
          // sideDiv.classList.add('');

          const sideName = document.createElement("p");
          sideName.textContent = name;

          const sidePrice = document.createElement("p");
          sidePrice.textContent = ` ${price} zł`;

          const sideBtn = document.createElement("button");
          sideBtn.textContent = "+";
          // sideBtn.classList.add("");

          sideDiv.append(sideName, sidePrice, sideBtn);
          li.append(...li.children, sideDiv);
        });
      }

      const isInCart = cart.find(
        (item) => item.dishName === dishName.textContent
      );

      if (isInCart) {
        return isInCart.quantity++;
      }

      cart.push({
        dishName: dishName.textContent,
        dishPrice: dishPrice.textContent,
        quantity: 1,
      });
    });

    li.append(dishName, dishPrice, btn);

    dishList.append(li);
  });
};

window.addEventListener("load", showDishes());

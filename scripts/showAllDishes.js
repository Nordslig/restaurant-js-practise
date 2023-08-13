const btnShowDishes = document.querySelector(".btn.showDishes");
const mainSec = document.querySelector(".mainSec.menu");
const dishList = document.querySelector(".menu.dishList");

const showDishes = () => {
  dishList.innerHTML = "";
  dishes.forEach((dish) => {
    const { name, price } = dish;

    const li = document.createElement("li");
    const dishName = document.createElement("p");
    dishName.textContent = name;
    const dishPrice = document.createElement("p");
    dishPrice.textContent = ` ${price} zł`;
    const btn = document.createElement("button");
    btn.textContent = "Dodaj";
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
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

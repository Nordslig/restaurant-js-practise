const btnShowDishes = document.querySelector(".btn.showDishes");
const mainSec = document.querySelector(".mainSec.menu");
const dishList = document.querySelector(".menu.dishList");

const showDishes = () => {
  dishList.innerHTML = "";
  dishes.forEach((dish) => {
    const { name: dName, price, type } = dish;

    const li = document.createElement("li");

    const dishName = document.createElement("p");
    dishName.textContent = dName;

    const dishPrice = document.createElement("p");
    dishPrice.textContent = ` ${price} zł`;

    const btn = document.createElement("button");
    btn.textContent = "Dodaj";
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
      if (type === "dish") {
        const saucesDiv = document.createElement("div");
        saucesDiv.style.display = "flex";

        const pWarning = document.createElement("p");
        pWarning.textContent = "You must pick one sauce";
        pWarning.style.color = "red";

        sides.sauces.forEach(({ name: sName, price: sPrice }) => {
          const sideDiv = document.createElement("div");
          sideDiv.style.display = "flex";
          // sideDiv.classList.add('');

          const sideName = document.createElement("p");
          sideName.textContent = sName;

          const sidePrice = document.createElement("p");
          sidePrice.textContent = ` ${sPrice} zł`;

          const sideBtn = document.createElement("button");
          sideBtn.textContent = "+";
          // sideBtn.classList.add("");

          sideBtn.addEventListener("click", () => {
            // const isInCart = cart.find(
            //   (item) => item.dishName === dishName.textContent
            // );

            // if (isInCart) {
            //   return isInCart.quantity++;
            // }

            const curSauce = sides.sauces.find((sauce) => sauce.name === sName);

            cart.push({
              dishName: dName,
              dishPrice: price,
              quantity: 1,
              type,
              addInfo: [{ sauce: curSauce.name }],
            });
          });
          sideDiv.append(sideName, sidePrice, sideBtn);

          saucesDiv.append(sideDiv);
        });

        return li.append(...li.children, pWarning, saucesDiv);
      }

      const isInCart = cart.find(
        (item) => item.dishName === dishName.textContent
      );

      if (isInCart) {
        return isInCart.quantity++;
      }

      cart.push({
        dishName: dName,
        dishPrice: price,
        quantity: 1,
        type,
      });
    });

    li.append(dishName, dishPrice, btn);

    dishList.append(li);
  });
};

window.addEventListener("load", showDishes());

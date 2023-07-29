const btnShowDishes = document.querySelector(".btn.showDishes");
const containerAllDishes = document.querySelector(".allDishes");
const mainSec = document.querySelector(".mainSec.allDishes");

btnShowDishes.addEventListener("click", () => {
  if (containerAllDishes) {
    if (containerAllDishes.innerHTML.length > 0) return false;
    mainSec.classList.toggle("noActive");
    mainSec.innerHTML += `<ul class="mainSec dishesList"></ul>`;

    const dishesList = document.querySelector(".dishesList");

    dishes.forEach(({ name, price, description }) => {
      dishesList.innerHTML += `<li>
      <p>
      ${name} at ${price} zł
      </p>
      <p>${description}</p>
      </li>`;
    });
  } else {
  }
  // btnShowDishes.classList.toggle("active");
  // btnShowDishes.setAttribute("disabled", true);
});

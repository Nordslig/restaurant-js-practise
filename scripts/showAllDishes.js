const btnShowDishes = document.querySelector(".btn.showDishes");
const containerAllDishes = document.querySelector(".allDishes");

btnShowDishes.addEventListener("click", () => {
  if (containerAllDishes.innerHTML.length > 0) return;

  dishes.forEach(({ name, price, description }) => {
    containerAllDishes.innerHTML += `<li>
        <p>
          ${name} at ${price} zł
        </p>
        <p>${description}</p>
      </li>`;
  });
  // btnShowDishes.classList.toggle("active");
  // btnShowDishes.setAttribute("disabled", true);
});

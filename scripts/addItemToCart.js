const addBtns = document.querySelectorAll(".menu .btn");

// console.log(addBtns);

addBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log(btn.closest(`.btn `));
    // const dName = btn.closest(".dishName").textContent;
    // const dPrice = btn.closest(".dishPrice").textContent;
    cart.push({ dName, dPrice });

    console.log(cart);
  })
);

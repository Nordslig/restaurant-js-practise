const addBtns = document.querySelectorAll(".menu .btn");

// console.log(addBtns);

addBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const id = Math.round(Math.random() * 100);
    const dName = btn.closest(`li`).firstElementChild.children[0].textContent;
    const dPrice = btn.closest(`li`).firstElementChild.children[1].textContent;
    cart.push({ id, dName, dPrice });

    console.log(cart);
  })
);

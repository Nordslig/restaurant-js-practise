const btnOrder = document.querySelector(".order");

const checkout = () => {
  if (cart.length === 0) {
    return console.log("You need to add items to cart first.");
  }

  signIn();

  document.querySelector(".mainSec.cart").classList.toggle("noActive");

  btns.forEach((btn) => {
    btn.classList.remove("active");
    btn.removeAttribute("disabled");
    if (btn.innerText.replace(/\s/g, "").toLowerCase() === "signin") {
      btn.classList.toggle("active");
    }
  });
};

btnOrder.addEventListener("click", checkout);

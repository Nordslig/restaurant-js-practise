const btns = document.querySelectorAll("nav button.btn");
const mainSecs = document.querySelectorAll(".mainSec");

console.log(btns);

const changeActiveBtn = (btn) => {
  btns.forEach(
    (btn) =>
      btn.classList.contains("active") &&
      (btn.classList.toggle("active"), btn.removeAttribute("disabled"))
  );
  btn.classList.toggle("active");
  btn.setAttribute("disabled", true);

  const mainSecsArr = [...mainSecs];

  mainSecs.forEach(
    ({ classList }) =>
      !classList.contains("noActive") && classList.toggle("noActive")
  );

  const currentSec = mainSecsArr.find(({ classList }) =>
    classList.contains(btn.innerText.toLowerCase())
  );

  switch (btn.innerText.toLowerCase()) {
    case "cart":
      showCart();
      break;

    default:
      break;
  }

  currentSec.classList.toggle("noActive");
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => changeActiveBtn(btn))
);

const btns = document.querySelectorAll("button.btn");
const mainSecs = document.querySelectorAll(".mainSec");

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

  currentSec.classList.toggle("noActive");
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => changeActiveBtn(btn))
);

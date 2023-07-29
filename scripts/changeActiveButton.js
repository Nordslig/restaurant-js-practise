const btns = document.querySelectorAll("button.btn");
const mainSecs = document.querySelectorAll(".mainSec");

console.log(mainSecs);

const changeActiveBtn = (btn) => {
  btns.forEach(
    (btn) =>
      btn.classList.contains("active") &&
      (btn.classList.toggle("active"), btn.removeAttribute("disabled"))
  );
  btn.classList.toggle("active");
  btn.setAttribute("disabled", true);

  mainSecs.forEach((sec) => {
    if (
      sec.classList.contains(
        btn.innerText.toLowerCase() &&
          mainSecs.forEach(
            (sec) =>
              !sec.classList.contains("noActive") &&
              sec.classList.toggle("noActive")
          )
      )
    )
      sec.classList.toggle("noActive");
    else console.log("What");
  });
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => changeActiveBtn(btn))
);

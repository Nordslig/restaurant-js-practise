const btns = document.querySelectorAll("button.btn");

const changeActiveBtn = (btn) => {
  btns.forEach(
    (btn) =>
      btn.classList.contains("active") &&
      (btn.classList.toggle("active"), btn.removeAttribute("disabled"))
  );
  btn.classList.toggle("active");
  btn.setAttribute("disabled", true);
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => changeActiveBtn(btn))
);

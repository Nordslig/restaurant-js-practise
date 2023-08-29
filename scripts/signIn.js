const signIn = () => {
  const formLogin = document.querySelector(".login");

  formLogin.classList.toggle("noActive");

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("emailSignIn");
    const password = document.getElementById("passSignIn");

    if (email.value === "" || password.value === "") {
      return console.log("Provide proper data.");
    }

    const cUser = users.find((user) => user.email === email.value);

    if (!cUser) {
      return console.log("Provide right email.");
    }

    if (cUser.password !== password.value) {
      return console.log("Password is incorrect.");
    }

    currentUser.id = cUser.id;
    currentUser.email = cUser.email;
    currentUser.password = cUser.password;

    document.querySelector(".signInStatus").textContent;
    ("Hi, you are signed in.");
  });
};

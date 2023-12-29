const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const skipBtn = document.getElementById("skip");
const loginSkip = document.getElementById("l-skip");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
skipBtn.addEventListener("click", () => {
  //   alert("hello");
  container.classList.remove("sign-up-mode");
});
loginSkip.addEventListener("click", () => {
  window.location.replace("./dashboard.html");
});
window.onload = () => {
  let title = document.getElementById("title");
  console.log("title", title);
};
function addingName() {
  title.innerHTML = `${nameofuser.name}`;
}

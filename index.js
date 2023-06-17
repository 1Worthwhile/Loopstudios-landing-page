let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("active", this.scrollY > 20);
});

let overlay = document.querySelector(".overlay");
let link_con = document.querySelector(".links");
let menu_btn = document.querySelector(".menu_btn");
let all_anchors = document.querySelectorAll(".links > a");

menu_btn.onclick = () => {
  overlay.classList.toggle("active");
  menu_btn.classList.toggle("active");
  link_con.classList.toggle("active");
  window.scrollY > 20 || nav.classList.toggle("active");
};

overlay.onclick = () => {
  overlay.classList.remove("active");
  menu_btn.classList.remove("active");
  link_con.classList.remove("active");
};

for (const anchors of all_anchors) {
  anchors.onclick = () => {
    overlay.classList.remove("active");
    menu_btn.classList.remove("active");
    link_con.classList.remove("active");
  };
}

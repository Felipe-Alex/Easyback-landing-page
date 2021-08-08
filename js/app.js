const d = document,
    $btn = d.querySelector(".nav__hamburguer"),
    $menu = d.querySelector(".nav__modal"),
    $body = d.querySelector("body");

$btn.addEventListener('click', () => {
    $btn.firstElementChild.classList.toggle("none");
    $btn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("active");
    $body.classList.toggle("noscroll");
});

d.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__modal a")) return;
    $btn.firstElementChild.classList.remove("none");
    $btn.lastElementChild.classList.add("none");
    $menu.classList.remove("active");
    $body.classList.remove("noscroll");
})

window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
        $btn.firstElementChild.classList.remove("none");
        $btn.lastElementChild.classList.add("none");
        $menu.classList.remove("active");
        $body.classList.remove("noscroll");
    }
})

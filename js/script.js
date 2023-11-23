document.addEventListener("DOMContentLoaded", function () {
  !(function () {
    var e = document.querySelector(".cookie-bar");
    if (!e) return !1;
    var t = e.querySelector(".cookie-bar__close");
    "true" === localStorage.getItem("cookie")
      ? e.remove()
      : ((e.style.display = "flex"),
        t.addEventListener("click", function (t) {
          e.remove(), localStorage.setItem("cookie", "true");
        }));
  })();
  (r = document.querySelectorAll(".tabs")) &&
    r.forEach(function (e) {
      var t = e.querySelectorAll(".tabs__btn"),
        i = e.querySelectorAll(".tabs__item");
      t.forEach(function (e) {
        e.addEventListener("click", function () {
          t.forEach(function (e) {
            e.classList.remove("tabs__btn--active");
          }),
            e.classList.add("tabs__btn--active");
          var r = e.dataset.tabsPath;
          i.forEach(function (e) {
            e.classList.remove("tabs__item--active");
          }),
            document
              .querySelector('[data-tabs-target="'.concat(r, '"]'))
              .classList.add("tabs__item--active");
        });
      });
    });
  var swiper = new Swiper(".tarif_row", {
    slidesPerView: "auto",
    spaceBetween: 0,
    debugger: true,
  });
  var swiper2 = new Swiper(".trade_slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    debugger: true,
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
    loop: true,
  });
  var swiper3 = new Swiper(".tarif_row_mobile", {
    slidesPerView: "auto",
    spaceBetween: 12,
    debugger: true,
  });
  const modal = document.getElementById("modal-form");
  const form = document.getElementById("email-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.getElementById("reset").click();
  });
  const modal_removers = document.querySelectorAll(".modal-remover");
  modal_removers.forEach((elem) =>
    elem.addEventListener("click", () => (modal.style.display = "none"))
  );
});

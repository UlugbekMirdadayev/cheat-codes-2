document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slidesCount = slides.length;
  let currentSlide = 0;

  function showSlides() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    for (let i = currentSlide; i < currentSlide + 3; i++) {
      const index = i % slidesCount;
      slides[index].style.display = "block";
    }
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesCount;
    showSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
    showSlides();
  }

  document.querySelector(".nextBtn").addEventListener("click", nextSlide);
  document.querySelector(".prevBtn").addEventListener("click", prevSlide);

  showSlides();

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
});

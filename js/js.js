document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
  })
});

document.getElementById("name-user").innerHTML =
"Рахуба Сергій Леонідович";
document.querySelector(".logo").innerHTML = "<img src='img/logo.png' />";

var swiperCatalogue = new Swiper(".swiper-back", {
loop: true,
slidesPerView: 1,
centeredSlides: true,
autoplay: {
  delay: 5000,
  stopOnLastSlide: true,
  disableOnInteraction: true,
},
});
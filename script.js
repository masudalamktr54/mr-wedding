var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});


// script js

document.querySelector(".main-hero").style.display = "none"

document.querySelector(".button").addEventListener("click", () => {
	document.querySelector(".main-hero").style.display = "inline"

	document.querySelector(".button").style.display = "none"
})
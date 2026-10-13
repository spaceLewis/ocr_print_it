const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
let currentSlideIndex = 0;

// Crée les points de navigation pour chaque diapositive.
slides.forEach((slide, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	// Si c'est le premier point, ajoute la classe "dot_selected" par défaut.
	if (index === 0) {
		dot.classList.add("dot_selected");
	}
	// Ajoute le point au conteneur des points de navigation.
	dotsContainer.appendChild(dot);
});

// sélectionne tous les points de navigation
const dots = document.querySelectorAll(".dot");

// Met à jour l'image, le texte et les points en fonction de l'index du diaporama actuel.
function updateSlide() {
	const currentSlide = slides[currentSlideIndex];

	bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
	bannerText.innerHTML = currentSlide.tagLine;
	// Pour chaque point ajoute ou supprime la classe "dot_selected" en fonction de l'index actuel.
	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentSlideIndex);
	});
}

// événement de clic sur la flèche gauche
arrowLeft.addEventListener("click", () => {
	currentSlideIndex -= 1;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}

	updateSlide();
});

// événement de clic sur la flèche droite
arrowRight.addEventListener("click", () => {
	currentSlideIndex += 1;
	if (currentSlideIndex === slides.length) {
		currentSlideIndex = 0;
	}

	updateSlide();
});

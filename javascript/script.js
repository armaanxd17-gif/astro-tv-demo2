const cards = document.querySelectorAll(".platform-card");
const slides = document.querySelector(".platform-slides");

function goToSlide(index) {

    slides.style.transform =
        `translateX(-${index * 100}%)`;

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[index].classList.add("active");
}


cards.forEach(card => {

    card.addEventListener("click", () => {

        const index = Number(card.dataset.slide);

        goToSlide(index);

    });

});


/* Hero buttons */

document.querySelectorAll("[data-target-slide]").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.targetSlide);

        setTimeout(() => {
            goToSlide(index);
        }, 100);

    });

});

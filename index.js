const content_boarding = [
    "While you're on holiday, here's where your furry friends will spend their time.",
    "Proper pet care involves providing nutritious food, regular veterinary check-ups, ample exercise, and affectionate attention to ensure the well-being and happiness of our furry companions",
    "Pet transport involves safely and comfortably relocating animals from one place to another, adhering to regulations, and ensuring their well-being throughout the journey."
];
const progress = document.querySelector(".options__progress");
const optionsItem = document.querySelectorAll(".options__title--item");
const optionDesc = document.querySelector('.options__desc')
optionsItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        progress.value = (index + 1) * 33;
        optionDesc.textContent = content_boarding[index]
    });
});


const content_boarding = [
    "While you're on holiday, here's where your furry friends will spend their time.",
    "Proper pet care involves providing nutritious food, regular veterinary check-ups, ample exercise, and affectionate attention to ensure the well-being and happiness of our furry companions",
    "Pet transport involves safely and comfortably relocating animals from one place to another, adhering to regulations, and ensuring their well-being throughout the journey.",
];

const progress = document.querySelector(".options__progress");
const optionsItem = document.querySelectorAll(".options__title--item");
const optionDesc = document.querySelector(".options__desc");
optionsItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        progress.value = (index + 1) * 33;
        optionDesc.textContent = content_boarding[index];
    });
});

const monthly_prices = [150, 199, 299];
const yearly_prices = [1530, 2099, 3099];

const check_box = document.querySelector("#switch");
check_box.addEventListener("change", (e) => {
    const packages_price = document.querySelectorAll(".packages__item--price");
    if (e.target.checked) {
        packages_price.forEach((item, index) => {
            item.textContent = "$" + yearly_prices[index];
        });
    } else {
        packages_price.forEach((item, index) => {
            item.textContent = "$" + monthly_prices[index];
        });
    }
});

const back_slider = document.querySelector(
    ".reviews__slider--back .slider__button"
);
const forward_slider = document.querySelector(
    ".reviews__slider--forward .slider__button"
);

const slides = document.querySelectorAll(".review__card");
const wrapper = document.querySelector(".wrapper");
const dots = document.querySelectorAll(".reviews__dots li div");
let current_dots = 0;
let new_left_index = wrapper.scrollLeft;

back_slider.addEventListener("click", () => showSlide(1, current_dots - 1));
forward_slider.addEventListener("click", () => showSlide(2, current_dots + 1));

const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

// 1 - back
// 2 - forward
function showSlide(mode, index) {
    dots.forEach((dot) => {
        dot.style.backgroundColor = "transparent";
    });
    index = index < 0 ? 0 : index;
    index = index > 2 ? 2 : index;
    if (mode == 1) {
        if (wrapper.scrollLeft > 0) {
            wrapper.scrollLeft -= slides[0].clientWidth;
            dots[index].style.backgroundColor = "#ff5b2e";
            current_dots = index;
        } else {
            dots[current_dots].style.backgroundColor = "#ff5b2e";
        }
    }
    if (mode == 2) {
        if (wrapper.scrollLeft < maxScroll) {
            wrapper.scrollLeft += slides[0].clientWidth;
            dots[index].style.backgroundColor = "#ff5b2e";
            current_dots = index;
        } else {
            dots[current_dots].style.backgroundColor = "#ff5b2e";
        }
    }
}

var checkbox = document.querySelector(".checkbox_theme");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

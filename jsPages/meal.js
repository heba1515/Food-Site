let imageDiv = document.querySelector(".section__div--img");
let mealName = document.querySelector("h2");
let rate = document.querySelector(".rating");
let ingredientsList = document.querySelector(".ingredientsList");

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipeId');

function fetchMealDetails(id) {
    let request = new XMLHttpRequest();
    request.onload = () => {
        if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            imageDiv.innerHTML = `<img src="${response.image}" alt="" class="dishImage">`;
            mealName.textContent = response.name;

            let ratingNumber = document.createElement('span');
            ratingNumber.classList.add('ratingNumber');
            ratingNumber.textContent = response.rating;
            rate.innerHTML = '';
            rate.appendChild(ratingNumber);

            ingredientsList.innerHTML = '';
            let ingredients = response.ingredients;
            ingredients.forEach((ingredient) => {
                let listItem = document.createElement("li");
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });

            activateStars();
        }
    };
    request.open("GET", `https://dummyjson.com/recipes/${id}`, true);
    request.send();
}

function activateStars() {
    const stars = document.querySelectorAll('.rating i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= ratingValue) {
                    s.classList.add('selected');
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchMealDetails(recipeId);
    activateStars();
});

const heartIcon = document.getElementById('startContent__div--icon');
heartIcon.addEventListener('click', () => {
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = "orange";
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        heartIcon.style.color = "";
    }
});

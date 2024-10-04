let recipesSection = document.querySelector(".recipes");

let r = new XMLHttpRequest();
r.onload = () => {
    if (r.readyState === 4 && r.status == 200) {
        let response = JSON.parse(r.responseText);
        let recipes = response.recipes;

        recipes.map((recipe) => {
            recipesSection.innerHTML += `
                <div class="card" data-id="${recipe.id}">
                    <img src="${recipe.image}" alt="">
                    <h4>${recipe.name}</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            `;
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const recipeId = card.getAttribute('data-id');
                window.location.href = `meal.html?recipeId=${recipeId}`;
            });
        });
    }
};

r.open("GET", "https://dummyjson.com/recipes/", true);
r.send();

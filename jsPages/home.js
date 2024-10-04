let recipesSection = document.querySelector(".recipes");
let r = new XMLHttpRequest();

r.onload = () => {
    if (r.readyState === 4) {
        if (r.status == 200) {
            let response = JSON.parse(r.responseText);
            let recipes = response.recipes;

            recipes.map((recipe) => {
                recipesSection.innerHTML += `
                    <div class="card" data-id="${recipe.id}" onclick="window.location.href='meal.html?recipeId=${recipe.id}'">
                        <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: auto;">
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
        }
    }
};

r.open("GET", "https://dummyjson.com/recipes?sortBy=name&order=asc", true);
r.send();

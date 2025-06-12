const form = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const ingredient = document.getElementById("ingredient").value;
  const step = document.getElementById("step").value;

  const recipe = document.createElement("div");
  recipe.classList.add("recipe");
  recipe.innerHTML = `
  <h3> ${title} </h3>
  <p> <strong> Ingriend: </strong>${ingredient} </p>
  <p> <strong> Step: </strong>${step} </p>`;

  recipeList.appendChild(recipe);
  form.reset();
});

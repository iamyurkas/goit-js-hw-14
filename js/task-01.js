const categories = document.querySelector("#categories");

// Count categories
const numberOfCategories = categories.querySelectorAll("li.item").length;
console.log("Number of categories:", numberOfCategories);

// Go through all categories
categories.querySelectorAll("li.item").forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const numberOfElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
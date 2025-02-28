function fetchProducts() {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      window.productsData = data;
      fetchCategories();
      displayProducts();
    });
}

function fetchCategories() {
  fetch("/api/products/categories")
    .then((res) => res.json())
    .then((categories) => {
      const select = document.getElementById("categorySelect");
      select.innerHTML = '<option value="">All Categories</option>';
      categories.forEach((cat) => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
      });
    });
}

function displayProducts() {
  const container = document.getElementById("products");
  const category = document.getElementById("categorySelect").value;
  const query = document.getElementById("searchInput").value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;

  let products = window.productsData.filter(
    (p) =>
      (!category || p.category === category) &&
      (!query || p.title.toLowerCase().includes(query))
  );

  if (sortBy === "price") products.sort((a, b) => a.price - b.price);
  if (sortBy === "title")
    products.sort((a, b) => a.title.localeCompare(b.title));

  container.innerHTML = products
    .map(
      (p) => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${
                  p.image
                }" class="card-img-top" style="height:250px;object-fit:contain;">
                <div class="card-body">
                    <h5>${p.title}</h5>
                    <p>$${p.price}</p>
                    <p>${p.description.slice(0, 80)}...</p>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

document
  .getElementById("categorySelect")
  .addEventListener("change", displayProducts);
document
  .getElementById("searchInput")
  .addEventListener("input", displayProducts);
document
  .getElementById("sortSelect")
  .addEventListener("change", displayProducts);

fetchProducts();

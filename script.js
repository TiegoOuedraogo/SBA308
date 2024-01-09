document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const brand = document.getElementById('search-input').value;
    const products = await fetchProductsByBrand(brand);
    displayProducts(products);
});

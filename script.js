// Масив продуктів
const products = [
    { name: "Neon Sign", category: "neon", description: "Bright neon sign for your room" },
    { name: "Neon Light", category: "lights", description: "Colorful neon light" },
    { name: "LED Lamp", category: "lights", description: "Stylish LED lamp" }
];

// Функція для відображення продуктів
function displayProducts(productsToDisplay) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';  // Очищення контейнера для продуктів

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;

        productsDiv.appendChild(productDiv);
    });
}

// Фільтрація продуктів за категоріями
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Початкове відображення всіх продуктів
window.onload = function() {
    filterProducts('all');
};

function addToCart(productName, productPrice) {
    alert(`${productName} за ${productPrice} грн додано до корзини!`);
}

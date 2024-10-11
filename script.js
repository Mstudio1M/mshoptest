const cart = [];

function showCategory(category) {
    const categories = document.querySelectorAll('.category');
    const title = document.getElementById('category-title');
    const cartButton = document.getElementById('cart-button');

    categories.forEach(cat => {
        cat.classList.remove('active');
    });

    document.getElementById(category).classList.add('active');

    if (category === 'new') {
        title.innerText = 'Новинки';
        cartButton.style.display = 'block';
    } else if (category === 'keychains') {
        title.innerText = 'Брелки';
        cartButton.style.display = 'block';
    } else if (category === 'swords') {
        title.innerText = 'Мечі';
        cartButton.style.display = 'block';
    } else if (category === 'figures') {
        title.innerText = 'Фігурки';
        cartButton.style.display = 'block';
    } else {
        title.innerText = 'Корзина';
        cartButton.style.display = 'none';
        document.getElementById('cart').style.display = 'block';
        categories.forEach(cat => cat.style.display = 'none');
    }
}

function addToCart(itemName, itemPrice) {
    const itemInCart = cart.find(item => item.name === itemName);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} (x${item.quantity})</p>
                <p>${item.price * item.quantity} грн</p>
                <button onclick="removeFromCart('${item.name}')">Видалити</button>
            </div>
        `;
    });

    document.getElementById('total-price').innerText = `Сума: ${totalPrice} грн`;
}

function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }

    updateCart();
}

    let cart = [];

    function openMenu() {
        document.getElementById("side-menu").style.width = "250px";
    }

    function closeMenu() {
        document.getElementById("side-menu").style.width = "0";
    }

    function showCategory(category) {
        const categories = document.querySelectorAll('.category');
        categories.forEach(c => {
            c.classList.remove('active');
        });
        document.getElementById(category).classList.add('active');
        if (category === 'cart') {
            updateCart();  // Оновлюємо кошик при відкритті
        }
        closeMenu();
    }

    function addToCart(item, price) {
        const existingItem = cart.find(cartItem => cartItem.item === item);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ item, price, quantity: 1 });
        }
        updateCart();
    }

        // Функція для додавання кількості товару
    function addOneToCart(index) {
        cart[index].quantity += 1;
        updateCart();
    }

    function updateCart() {
        const cartItemsDiv = document.getElementById("cart-items");
        cartItemsDiv.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((cartItem, index) => {
            totalPrice += cartItem.price * cartItem.quantity;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <p>${cartItem.item} - ${cartItem.price} грн (шт: ${cartItem.quantity})</p>
                    <button class="cart-btn minus-btn" onclick="removeOneFromCart(${index})">-1</button>
                    <button class="cart-btn plus-btn" onclick="addOneToCart(${index})">+1</button>
                </div>`;
        });

        document.getElementById("total-price").innerText = `Загальна сума: ${totalPrice} грн`;
    }

    function removeOneFromCart(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    }
        function showSubCategory(subCategory) {
        const subCategories = document.querySelectorAll('.sub-category');
        subCategories.forEach(sub => {
            sub.style.display = 'none';
        });
        document.getElementById(subCategory).style.display = 'block';
    }
    
    let currentImageIndex = 0;
    let images = [];

    function openModal(productId) {
        // Залежно від товару, додамо відповідні зображення
        if (productId === 'katanaV1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USe76f9652e3ad0b/design/2023-12-26_ce396bb884b56.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USe76f9652e3ad0b/design/2023-12-15_6e7401f9d29ac.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USe76f9652e3ad0b/design/2023-12-15_825f6b1100c2.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'katanaV2') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US860131070d870b/design/2024-03-09_0d6ef27e38adc.png?x-oss-process=image/resize,w_1920/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US860131070d870b/design/2024-03-09_80f8b4c0218e1.png?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US860131070d870b/design/2024-03-09_ef7aae71523bb.png?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }
        if (productId === 'Dragon wand') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USb57343505201ca/design/2024-01-11_da516196d0646.jpg?x-oss-process=image/resize,w_1920/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USb57343505201ca/design/2024-01-11_93af7fd807fd3.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USb57343505201ca/design/2024-01-11_d53a128927566.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'lightswordV1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USeae572dab7627d/design/2024-01-30_4a32598cda11.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USeae572dab7627d/design/2024-01-30_8dddc1d7a13b8.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USeae572dab7627d/design/2024-01-30_bc1d8891eecf6.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'lightswordV2') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USa8b173f9741f5a/design/2024-01-29_1ac70dce47d62.jpg?x-oss-process=image/resize,w_1920/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USa8b173f9741f5a/design/2024-01-29_da8c66579309b.jpg?x-oss-process=image/resize,w_1920/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USa8b173f9741f5a/design/2024-01-29_47c1474112c54.jpg?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }

        // Додай інші товари тут

        // Показуємо перше зображення
        showImage(0);
        document.getElementById('imageModal').style.display = "block";
    }

    function closeModal() {
        document.getElementById('imageModal').style.display = "none";
    }

    function showImage(index) {
        const modalImagesDiv = document.getElementById('modalImages');
        modalImagesDiv.innerHTML = images.map((img, i) => 
            `<img src="${img}" class="${i === index ? 'active' : ''}">`
        ).join('');
        currentImageIndex = index;
    }

    function changeImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
        showImage(currentImageIndex);
    }

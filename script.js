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
        if (productId === 'photoaparat') {
            images = [
                'https://cdn.thingiverse.com/renders/82/0e/ee/cc/c5/6dd715432dc2e8cf228afaa79f2b03a8_display_large.jpg',
                'https://cdn.thingiverse.com/renders/02/bb/04/31/0b/9fb25a572e1a1393a9f8a397cafb75f9_display_large.jpg',
                'https://cdn.thingiverse.com/renders/31/fb/43/12/fc/4806d0e3e28857cfae176ec288c4d2a1_display_large.jpg'
            ];
        }
        if (productId === 'Molot tora') {
            images = [
                'https://cdn.thingiverse.com/renders/7a/5e/4d/85/3c/c11a746fc996fff64a2f43529263059c_display_large.jpg',
                'https://cdn.thingiverse.com/renders/0d/b1/70/50/ed/cb5f1c2a9e255b964072ba5d322e0450_display_large.jpg',
                'https://cdn.thingiverse.com/renders/b9/65/1c/ff/9b/49f9fd2c10f15202ddd9b7d99dec0dca_display_large.jpg'
            ];
        }
        if (productId === 'batman') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000487053/design/2024-06-06_91f7acce7ec2c.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'Coffe') {
            images = [
                'https://cdn.thingiverse.com/renders/d7/94/7a/25/30/2f068820c15acf2288ca4dcb54ec8039_display_large.jpg',
                'https://cdn.thingiverse.com/renders/bd/c7/4c/6e/17/5e89d41a075d3e2336be71769e72da00_display_large.jpg',
                'https://cdn.thingiverse.com/renders/ee/b1/0c/6b/12/16b6c37f5fd5a193aa5469ecb4509349_display_large.jpg'
            ];
        }
        if (productId === 'Creaper') {
            images = [
                'https://cdn.thingiverse.com/renders/ed/7d/7b/8b/06/creepers_display_large.jpg',
                'https://cdn.thingiverse.com/renders/eb/d3/76/06/4d/creepersleutelhanger_display_large.jpg'
            ];
        }
        if (productId === 'Kilo') {
            images = [
                'https://cdn.thingiverse.com/assets/9e/f9/c7/83/d9/large_display_2019-11-18_22.08.59.jpg',
                'https://cdn.thingiverse.com/assets/b2/c7/74/d2/cf/large_display_Kettlebell_v5.stl',
                
            ];
        }
        if (productId === 'minecraft tools') {
            images = [
                'https://cdn.thingiverse.com/renders/e3/48/7c/e6/1e/minecraft-keychains-for-thingy_display_large.jpg',
                'https://cdn.thingiverse.com/renders/12/fc/08/63/9d/minecraft_tools_with_keychain_hole_plus_hoe_display_large.jpg',
                'https://cdn.thingiverse.com/renders/d4/78/d9/d7/51/minecraft_tools_with_keychain_hole_display_large.jpg'
            ];
        }
        if (productId === 'star wars') {
            images = [
                'https://cdn.thingiverse.com/renders/b0/42/6c/db/4a/starwarskeychain_display_large.jpg'
            ];
        }
        if (productId === 'Skull') {
            images = [
                'https://cdn.thingiverse.com/renders/c2/5c/4d/55/a5/d17d3b9c32aa8d30a36156a16162b720_display_large.jpg',
            ];
        }
        if (productId === 'shop coin') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US70acaef8f09414/design/2024-08-07_7c364a3505fda.png?x-oss-process=image/resize,w_1920/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US70acaef8f09414/design/2023-12-21_c573e891b6d41.png?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }
        if (productId === 'Android') {
            images = [
                'https://cdn.thingiverse.com/renders/c8/3b/29/6c/49/keys_display_large.jpg',
                'https://cdn.thingiverse.com/renders/94/01/96/e6/4b/straight-view_display_large.jpg',
                'https://cdn.thingiverse.com/renders/b1/90/d4/36/f4/android_key_fob_display_large.jpg'
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
        // Припустимо, у вас є масив cartItems, що містить товари в корзині
        const cartItems = [
            { name: 'Товар 1', price: 100, quantity: 2 },
            { name: 'Товар 2', price: 150, quantity: 1 }
        ];
        
        document.getElementById('checkout-btn').onclick = function() {
            // Отримати деталі замовлення з корзини
            let orderDetails = '';
            let total = 0;
        
            cartItems.forEach(item => {
                const itemTotal = item.price * item.quantity;
                orderDetails += `${item.name} (Кількість: ${item.quantity}, Ціна: ${item.price} грн) - Загальна: ${itemTotal} грн<br>`;
                total += itemTotal;
            });
        
            document.getElementById('order-details').innerHTML = orderDetails;
            document.getElementById('confirmation-modal').style.display = 'block';
        
            // Додаємо загальну суму до глобальної змінної
            window.totalAmount = total;
        };
        
        document.getElementById('cancel-order').onclick = function() {
            document.getElementById('confirmation-modal').style.display = 'none';
        };
        
        document.getElementById('confirm-order').onclick = function() {
            const orderData = {
                items: document.getElementById('order-details').innerHTML, // Отримати дані з вікна підтвердження
                total: window.totalAmount, // Використати загальну суму
                username: "Privatefanat" // Тут можна динамічно вставити нік користувача
            };
        
            fetch('/api/confirm-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            }).then(response => {
                if (response.ok) {
                    alert('Замовлення підтверджено!');
                    document.getElementById('confirmation-modal').style.display = 'none';
                } else {
                    alert('Сталася помилка при підтвердженні замовлення.');
                }
            });
        };

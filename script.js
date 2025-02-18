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
        if (productId === 'Korablyk') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000577568/design/2024-08-07_98ceb2d9cf02f.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000577568/design/2024-08-07_e8844cd3da2c1.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000577568/design/2024-08-07_da4fe893c4dc3.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'Dragonkeychain') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USc89b7e5bd1f/design/2024-01-05_92b431bb050bc.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USc89b7e5bd1f/design/2024-01-05_3c2028376938d.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USc89b7e5bd1f/design/2024-01-05_9e0eef2b9fbe7.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'Tapok') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US6faea0f1f802ec/design/2024-03-12_84daf55204ae9.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US6faea0f1f802ec/design/2024-03-10_1d26740c93529.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US6faea0f1f802ec/design/2024-03-05_0d6a333cf6786.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'ps4') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USaf1685aea5f633/design/2024-09-15_5881d8bfde931.png?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USaf1685aea5f633/design/2024-09-15_38c0944f9acef.png?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USaf1685aea5f633/design/2024-09-15_d1fd489e5e604.png?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'racket1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USed22dc1edf08ff/design/2024-05-05_c6656178f783e.jpeg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USed22dc1edf08ff/design/2024-05-05_329f958adb2b9.jpeg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'robot') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USd4d439a86e9051/design/2023-12-01_fc3b9c8e62259.png?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'yakirV1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USb54cce48fe9a75/design/2024-03-02_bcd4a3e40fc33.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'yakirV2') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USb4210acf7b9e7b/design/2024-01-17_13f72052b1014.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'roblox') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USb3734f797ba2f3/design/2023-10-24_d7aed8c739843.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'bovling') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US39a86a52dfbd74/design/2024-06-08_d2284ecc30662.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US39a86a52dfbd74/design/2024-06-08_6c12f322b0f93.jpeg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'starbucks') {
            images = [
                'https://cdn.thingiverse.com/assets/71/8f/fd/17/fa/large_display_19059.jpg',
                'https://cdn.thingiverse.com/assets/72/26/00/df/0a/large_display_IMG-6215.jpg'
            ];
        }
        if (productId === 'spiderman') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USb8e820cac7b732/design/2024-02-27_538821e844ed2.jpeg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USb8e820cac7b732/design/2024-02-25_f4045405a9bfe.png?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/USb8e820cac7b732/design/2024-02-25_a2fa4509082b.png?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }
        if (productId === 'darthvader') {
            images = [
                'https://cdn.thingiverse.com/renders/d1/67/f8/d4/eb/vader_fob_display_large.jpg',
                'https://cdn.thingiverse.com/renders/5e/f9/bb/f6/77/fob_front_display_large.jpg',
                'https://cdn.thingiverse.com/renders/dc/6d/7d/35/3b/Darth_Vader_display_large.jpg'
            ];
        }
        if (productId === 'ghost') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000379227/design/2024-03-18_d47obgdonzut.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000379227/design/2024-03-18_jbi4bj1kn3cq.png?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/DSM00000000379227/design/2024-03-18_d5ddvgwfnggz.png?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }
        if (productId === 'poop') {
            images = [
                'https://cdn.thingiverse.com/renders/30/e2/12/32/86/IMG_4140_display_large.JPG',
                'https://cdn.thingiverse.com/renders/ae/e7/05/9c/01/poopemojikeychain_display_large.jpg'
            ];
        }
        if (productId === 'racketV2') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US7e5a5415009369/design/2023-12-16_c2eb44e17a56a.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US7e5a5415009369/design/2023-12-16_d20db936f8929.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'dragon1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US7a7338869a86c2/design/2024-08-20_eb269e1fbdce.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US7a7338869a86c2/design/2024-08-20_a39a381181926.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'octopus') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/US7275b0b14b2b1b/design/2023-08-16_b0qekzgmoxkm.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US7275b0b14b2b1b/design/2023-08-16_68wwjqr9j9b0.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/US7275b0b14b2b1b/design/2023-08-16_xf0l69nfg8el.jpg?x-oss-process=image/resize,w_1000/format,webp'
            ];
        }
        if (productId === 'phone1') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/USa42ed4537b10b2/design/2024-10-13_af93788ad38c6.jpg?x-oss-process=image/resize,w_1920/format,webp'
            ];
        }
        if (productId === 'phoneua1') {
            images = [
                'https://cdn.thingiverse.com/assets/c6/ab/0e/39/cb/large_display_f6f929db-3649-4e84-9564-8e3c8afa0de3.png'
            ];
        }
        if (productId === 'phoneua2') {
            images = [
                'https://makerworld.bblmw.com/makerworld/model/UScbe8847eb804c4/design/2024-05-20_382680e9f0a028.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/UScbe8847eb804c4/design/2024-05-20_48db447d064d4.jpg?x-oss-process=image/resize,w_1000/format,webp',
                'https://makerworld.bblmw.com/makerworld/model/UScbe8847eb804c4/design/2024-05-20_5a8aef56e3cb08.jpg?x-oss-process=image/resize,w_1000/format,webp'
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


    document.addEventListener("DOMContentLoaded", () => {
        if (document.getElementById("keychains")) {
            generateProducts("keychains");
        } else {
            console.error("Категорія 'keychains' не знайдена!");
        }
    });

    const baseImage = "https://makerworld.bblmw.com/makerworld/model/US6faea0f1f802ec/design/2024-03-10_1d26740c93529.jpg";
    
    const products = [
        { id: "photoaparat", name: "Фотоапарат", price: 20, image: "Baseimage" },
        { id: "Molot tora", name: "Молот Тора", price: 15, image: "Baseimage" },
        { id: "batman", name: "Batman", price: 15, image: "Baseimage" },
        { id: "Creaper", name: "Кріпер", price: 25, image: "Baseimage" },
    ];
    
    function generateProducts(categoryId) {
        const categoryDiv = document.getElementById(categoryId);
        if (!categoryDiv) {
            console.error(`Помилка: категорія '${categoryId}' не знайдена!`);
            return;
        }
    
        console.log(`Генерація товарів для категорії: ${categoryId}`);
        
        categoryDiv.innerHTML = ""; // Очищаємо перед додаванням товарів
    
        const productGrid = document.createElement("div");
        productGrid.classList.add("product-grid");
    
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.style.width = "calc(50% - 20px)";
    
            const imageUrl = product.image === "Baseimage" ? baseImage : product.image;
    
            productDiv.innerHTML = `
                <img src="${imageUrl}" alt="${product.name}" onclick="openModal('${product.id}')">
                <h3>${product.name}</h3>
                <p>Ціна: ${product.price} грн</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Додати в корзину</button>
            `;
            productGrid.appendChild(productDiv);
        });
    
        categoryDiv.appendChild(productGrid);
        console.log(`Додано ${products.length} товарів у категорію '${categoryId}'`);
    }



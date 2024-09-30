// Inicializar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice) {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        // Si el producto ya está, incrementar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si es un nuevo producto, agregarlo al carrito
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostrar un mensaje de éxito
    alert(`${productName} agregado al carrito!`);

    // Actualizar el carrito visualmente
    updateCart();
}

function removeFromCart(productId) {
    // Remover el producto del carrito
    cart = cart.filter(item => item.id !== productId);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el carrito visualmente
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    // Verificar si el carrito existe en la página del carrito
    if (cartItems) {
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>M</td>
                    <td>Negro</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)} USD</td>
                    <td>$${(item.price * item.quantity).toFixed(2)} USD</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Eliminar</button></td>
                </tr>`;
            cartItems.innerHTML += row;
            total += item.price * item.quantity;
        });

        cartTotal.innerText = `$${total.toFixed(2)} USD`;
    }
}

function clearCart() {
    // Limpiar el carrito
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Ejecutar al cargar la página del carrito para actualizar los productos en el DOM
window.onload = function() {
    updateCart();
};

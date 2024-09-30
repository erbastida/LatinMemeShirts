let cart = [];

function addToCart(productId) {
    // Agregar el producto al carrito (simulación)
    cart.push({ id: productId, name: "Playera Meme 1", price: 15 });
    alert("Producto agregado al carrito!");
    updateCart();
}

function removeFromCart(productId) {
    // Remover el producto del carrito (simulación)
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    // Actualizar la vista del carrito
    let cartItems = document.getElementById('cartItems');
    let cartTotal = document.getElementById('cartTotal');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let row = `<tr>
                    <td>${item.name}</td>
                    <td>M</td>
                    <td>Negro</td>
                    <td>1</td>
                    <td>$${item.price}</td>
                    <td>$${item.price}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Eliminar</button></td>
                   </tr>`;
        cartItems.innerHTML += row;
        total += item.price;
    });
    
    cartTotal.innerText = `$${total.toFixed(2)} USD`;
}

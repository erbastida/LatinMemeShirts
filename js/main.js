// Inicializar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(productId, productName, productPrice) {
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostrar un mensaje de confirmación
    alert(`${productName} ha sido agregado al carrito.`);
    updateCart();
}

// Función para remover productos del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
}

// Función para actualizar la vista del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    if (cartItems) {
        cartItems.innerHTML = ''; // Limpiar la tabla

        cart.forEach(item => {
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)} USD</td>
                    <td>$${(item.price * item.quantity).toFixed(2)} USD</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Eliminar</button></td>
                </tr>
            `;
            cartItems.innerHTML += row;
            total += item.price * item.quantity;
        });

        cartTotal.innerText = `$${total.toFixed(2)} USD`;
    }
}

// Limpiar carrito
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Ejecutar la actualización del carrito cuando la página se carga
window.onload = function() {
    updateCart();
};

function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("Gracias por tu mensaje, " + name + ". Nos pondremos en contacto contigo pronto.");
    document.getElementById('contactForm').reset(); // Limpiar el formulario
    return false; // Evitar el envío real del formulario
}


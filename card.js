function renderCart() {
    const tbody = document.querySelector('.product-tbody');
    tbody.innerHTML = ''; // table clear

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><button class="remove-btn" data-index="${index}">X</button></td>
            <td><img src="${item.image}" width="50"></td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td><input type="number" value="${item.qty || 1}" min="1" class="qty-input" data-index="${index}"></td>
            <td>${((parseFloat(item.price) || 0) * (item.qty || 1)).toFixed(2)}$</td>
        `;
        tbody.appendChild(tr);
    });

    // remove button
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); // re-render table
        });
    });

    // quantity change
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', e => {
            const index = e.target.dataset.index;
            cart[index].qty = Number(e.target.value);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); // update subtotal
        });
    });
    updateSubtotal(cart);
}
function updateSubtotal(cart) {
    let subtotal = 0;

    cart.forEach(item => {
        const price = parseFloat(item.price) || 0;
        const qty = item.qty || 1;
        subtotal += price * qty;
    });

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `$${subtotal.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', renderCart);

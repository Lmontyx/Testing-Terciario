let total = 0;

function addToCart(product, price) {

  total += price;

  document.getElementById('total').textContent = total;

  const item = document.createElement('div');

  item.innerHTML = `
    <span>${product}</span>
    <span>$${price}</span>
  `;

  document.getElementById('cart-items').appendChild(item);
}


document.getElementById('checkout-form').addEventListener('submit', function(e) {

  e.preventDefault();

  clearErrors();

  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const card = document.getElementById('card').value.trim();
  const payment = document.getElementById('payment').value;


  if(name.length < 3) {
    showError('name-error', 'El nombre debe tener al menos 3 caracteres');
    valid = false;
  }


  if(!email.includes('@') || !email.includes('.')) {
    showError('email-error', 'Correo inválido');
    valid = false;
  }


  if(phone.length < 8 || isNaN(phone)) {
    showError('phone-error', 'Teléfono inválido');
    valid = false;
  }


  if(address.length < 5) {
    showError('address-error', 'Dirección demasiado corta');
    valid = false;
  }


  if(card.length !== 16 || isNaN(card)) {
    showError('card-error', 'La tarjeta debe tener 16 números');
    valid = false;
  }


  if(payment === '') {
    showError('payment-error', 'Seleccione un método de pago');
    valid = false;
  }


  if(total === 0) {
    alert('El carrito está vacío');
    valid = false;
  }


  if(valid) {

    document.getElementById('success-message').style.display = 'block';

    document.getElementById('checkout-form').reset();

    document.getElementById('cart-items').innerHTML = '';

    total = 0;

    document.getElementById('total').textContent = total;
  }

});


function showError(id, message) {
  document.getElementById(id).textContent = message;
}


function clearErrors() {

  const errors = document.querySelectorAll('.error');

  errors.forEach(error => {
    error.textContent = '';
  });

  document.getElementById('success-message').style.display = 'none';
}
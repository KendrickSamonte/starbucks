gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            start: 'top top',
            end: 6000,
        },
        onComplete: () => {
            console.log('Animation completed');
        },
    });

    document.querySelectorAll('section').forEach(el => {

        gsap.to(el.querySelector('.text2'), {
            y: 0,
            ease: 'power2.inOut',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.text2 h1'),
                start: 'top bottom',
                end: '10%',
                scrub: 0.2,
            }
        })


        gsap.to(el.querySelector('.mid-img2 img'), {
            y: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.mid-img2 img'),
                start: 'top bottom',
                end: '50%',
                scrub: 0.2,
            }
        })

        gsap.to(el.querySelector('.mid-img3 img'), {
            y: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.mid-img3 img'),
                start: 'top bottom',
                end: '50%',
                scrub: 0.2,
            }
        })

        gsap.to(el.querySelector('.mid-img4 img'), {
            y: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.mid-img4 img'),
                start: 'top bottom',
                end: '50%',
                scrub: 0.2,
            }
        })

    })

})





let cart = [];

const checkoutModal = document.getElementById('checkoutModal');
const checkoutItemsElement = document.getElementById('checkout-items');
const totalPriceElement = document.getElementById('totalPrice');

const cartElement = document.querySelector('.cart');


const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
  updateCart();
}

function addToCart() {
  const productName = 'Strawberry'; 
  const productImage = 'b69792f05e841ba05af457360b68cdba-removebg-preview.png'; 
  const productPrice = '200';

  const size = document.getElementById('size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  const item = {
    name: productName,
    image: productImage,
    price: productPrice,
    size: size,
    quantity: quantity,
  };

  cart.push(item);

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCart();
}

function addToCartTwo() {
    const productName = 'Matcha'; 
    const productImage = 'matcha1.png'; 
    const productPrice = '200';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartThree() {
    const productName = 'Banana'; 
    const productImage = 'banana.png'; 
    const productPrice = '200';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartFour() {
    const productName = 'Choco'; 
    const productImage = 'choco.png'; 
    const productPrice = '200';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }
  
  function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="50">
        <p>${item.name} <span>Size:</span> ${item.size}, <span>Quantity:</span> ${item.quantity}, <span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
      `;
      cartItemsElement.appendChild(li);
    });
  
    updateCartBadge();
  }
  
  function updateCartBadge() {
    const cartBadge = document.querySelector('.cart::before');
    cartBadge.textContent = cart.length;
  }
  
  function closeCart() {
      document.querySelector('.cart').style.display = 'none';
    }
  
    
  function updateCheckoutModal() {
      checkoutItemsElement.innerHTML = '';
      let total = 0;
    
      cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="checkPage">
          <img class="checkout-img" src="${item.image}" alt="${item.name}" width="50">
          <p class="checkout-p"> <span>${item.name}</span> <br><span>Size:</span> ${item.size}, <br><span>Quantity:</span>
           ${item.quantity}, <br><span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        `;
        checkoutItemsElement.appendChild(li);
    
        total += item.price * item.quantity;
      });
    
      totalPriceElement.textContent = total.toFixed(2);
    }
    
    function openCheckout() {
      updateCheckoutModal();
      checkoutModal.style.display = 'block';
    }
    
    function closeCheckout() {
      checkoutModal.style.display = 'none';
    }
    
    function processCheckout() {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
    
    
      alert(`Order placed!\nName: ${name}\nAddress: ${address}\nTotal: ₱${totalPriceElement.textContent}`);
    
      cart = [];
      localStorage.removeItem('cart');
      updateCart();
      closeCheckout();
    }
  
    function toggleCart() {
      cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'grid' : 'none';
    }
  
    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
    
    
    document.getElementById('cart-items').addEventListener('click', function (event) {
      const removeButton = event.target.closest('.remove-item');
      if (removeButton) {
        const index = parseInt(removeButton.getAttribute('data-index'));
        removeItem(index);
      }
    });
    
  
    function updateCart() {
      const cartItemsElement = document.getElementById('cart-items');
      cartItemsElement.innerHTML = '';
    
  
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${item.image}" alt="${item.name}" width="90">
          <p>${item.name} <br><span>Size:</span> ${item.size}, <br><span>Quantity:</span> ${item.quantity},<br>
          <span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
          <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsElement.appendChild(li);
      });
    
      updateCheckoutModal();
    }

    

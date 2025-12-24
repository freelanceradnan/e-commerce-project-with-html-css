const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
    nav.classList.remove('active')
    })
}
//fetch api
const productsDiv = document.querySelector('.products');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    productsDiv.innerHTML = ""; 

    products.forEach(product => {
      productsDiv.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}">
          <span>${product.category}</span>
          <h5>${product.title}</h5>
          <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <h4>$${product.price}</h4>
        </div>
      `;
    });
  });
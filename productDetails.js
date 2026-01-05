document.addEventListener('DOMContentLoaded',()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        let id=localStorage.getItem('id')
        let newProduct=data.find(product=>product.id==Number(id))
        document.getElementById('prodetails').innerHTML=`
        
        <div class="single-pro-image">
    <img src="${newProduct.image}" alt="" width="100%" id="MainImg">
    
</div>
<div class="single-pro-details">
<h6>Home/${newProduct.category}</h6>
<h4 class="pro-title">${newProduct.title}</h4>
<h2 class="pro-price">${newProduct.price}$</h2>
<select>
    <option>Select Size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>Small</option>
    <option>Large</option>
</select>
<input type="number" value="1">
<button class="normal" id="add-to-cart">Add To Cart</button>
<h4>${newProduct.description}</h4>
<span></span>
</div>

        `;
document.querySelectorAll('#add-to-cart').forEach(btn=>{
    btn.addEventListener('click',addToCartFunc)
})
});

    })

function addToCartFunc(e){
    e.preventDefault()
    let section=e.currentTarget.closest('#prodetails')
    let fullTitle = section.querySelector('.pro-title').innerText;
    let shortTitle = fullTitle.split(" ").slice(0,3).join(" ")
    const product={
    id:localStorage.getItem('id'),
    image:section.querySelector('img').src,
    title:shortTitle,
    price:section.querySelector('.pro-price').innerText
}
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const exists=cart.find(item=>item.id===product.id)
    if(exists){
    exists.qty = Number(exists.qty) + Number(product.qty);
    
  }
  else{
    cart.push(product)
  }
localStorage.setItem('cart', JSON.stringify(cart));
alert('Added to cart ✅');
}


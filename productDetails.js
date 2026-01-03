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
<h4>${newProduct.category}</h4>
<h2>${newProduct.price}$</h2>
<select>
    <option>Select Size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>Small</option>
    <option>Large</option>
</select>
<input type="number" value="1">
<button class="normal">Add To Cart</button>
<h4>${newProduct.description}</h4>
<span></span>
</div>

        `
    })
})
function render(){
    let cart =  cartarray=JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    let content = ""
    for (i=0; i<cart.length; i++){
        content += `
        <div class="cart-product-item">
                <div class="cart-product-item-img">
                    <img src="${cart[i].item.img[0]}"
                        alt="pd1">
                </div>
                <div class="cart-product-item-info">
                    <p>${cart[i].item.nameProduct}</p>
                    <p>${cart[i].item.price}$</p>
                    <table>
                        <tr>
                            <td onclick="decreaseQuantity(${i})">-</td>
                            <td>${cart[i].sl}</td>
                            <td onclick="increaseQuantity(${i})">+</td>
                        </tr>
                    </table>
                    <div class="remove">
                        <a href=""><i class="fa-regular fa-trash-can"></i></a>
                        <p>Remove</p>
                    </div>
                </div>
                <div class="cart-product-item-total">
                    <p><strong>Total: ${Number(cart[i].item.price)*cart[i].sl}$</strong></p>
                </div>
            </div>`

    }
    document.querySelector('.rendercontent').innerHTML=content
}

render()
function increaseQuantity(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[item].sl++;
    localStorage.setItem('cart', JSON.stringify(cart));
    render();
}
  
function decreaseQuantity(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[item].sl > 1) {
      cart[item].sl--;
    } 
    else {
      cart.splice(item, 1); 
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    render();
}


document.addEventListener("DOMContentLoaded", () =>{

    document.querySelectorAll('.delete-btn').forEach(btn =>{
        btn.addEventListener('click',setDeleteBtns)
    })

    document.querySelectorAll('.cart .quantity').forEach(input => {
        input.addEventListener('change',setQuantity)
    })

    document.querySelectorAll('.card .add-item-btn').forEach(btn =>{
        btn.addEventListener('click',setAddItemBtn)        
    })

})

function setAddItemBtn(e){
    console.log('hi');
}

function setQuantity(e) {
    const input = e.target
    let quantity = input.value
    if (quantity <=0){
        quantity =1;
    e.target.value = quantity
    }
 

  const cartItem = input.parentElement.parentElement
  const price = cartItem.querySelector('.price').innerText.replace('$','')
  cartItem.querySelector('.subtotal').innerText=`$${quantity *price}`
  updatecart(price)

}



function setDeleteBtns (e){
    const row = e.currentTarget.parentElement.parentElement
    row.remove();
    updatecart()

}

function updatecart(){
    const cartItems = document.querySelectorAll('.cart .cart-item')

    let total = 0

    cartItems.forEach(item => {
        const quantity = item.querySelector('.quantity').value
        const price = item.querySelector('.price').innerText.replace('$','')
        total += (quantity * price)
    })

    document.querySelector('.total-price').innerText = `$${total}`
    
}


// document.addEventListener("DOMContentLoaded", () =>{

//     const deleteBtns = document.querySelectorAll('.delete-btn')

//     deleteBtns.forEach(btn =>{
//         btn.addEventListener('click',e =>{
//             e.currentTarget.parentElement.parentElement.remove()
//         })
//     })
// }) 

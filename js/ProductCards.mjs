const renderProductCard = (product) => {
    const div = document.createElement('div')
    div.classList.add('product')
    div.innerHTML = `<img src="${product.img}" alt="" class="product_img"> 
                    <div class="product_description"> 
                    <div class="product_name">
                        <div class="product_name_brand">${product.brand}</div>
                        <div class="product_name_model">${product.model}</div>
                    </div>
                    <div class="product_price">${product.price}</div>
                 </div>`
    return div
}
const appendProductCard = (product,container) =>{
    container.append(product)

}
const renderProductCards = (products,container) => {
    
    products.forEach((product)=> {
        const card = renderProductCard(product)
        appendProductCard(card,container)
    })
}


export default renderProductCards


// const catalog = document.querySelector(".catalog")
// const generateProductcards = (brand,model,price,img) =>{
//     return `
//         <div class="product">
//                 <img src="${img}" alt="" class="product_img"> 
//                 <div class="product_description"> 
//                     <div class="product_name">
//                         <div class="product_name_brand">${brand}</div>
//                         <div class="product_name_model">${model}</div>
//                     </div>
//                     <div class="product_price">${price}</div>
//                 </div>
//             </div      
//     `
// }
// const renderproducts = () =>{
//     products.forEach((product) =>{
//      const card = generateProductcards(product.brand,product.model,product.price,product.img)
//      catalog.innerHTML += card
// }).join('')
// }
// renderproducts()

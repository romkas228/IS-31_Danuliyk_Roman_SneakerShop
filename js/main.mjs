import renderProductCards from "./ProductCards.mjs";
import products from "./products.mjs";

window.addEventListener('DOMContentLoaded',() => {
    const productContainer = document.querySelector('.catalog')
    renderProductCards(products,productContainer)
})
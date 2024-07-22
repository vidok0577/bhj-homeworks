const cart = document.getElementsByClassName("cart__products")[0];
cart.ids = [];
const control = document.querySelectorAll(".product__quantity-control");
const btnAdd = document.querySelectorAll(".product__add");


control.forEach((el) => el.addEventListener("click", function(event){
    event.preventDefault();
    const decInc = event.target.className.slice(-3);
    let value;
    if (decInc === "dec") {
        value = event.target.nextElementSibling;
        value.textContent = parseInt(value.textContent) - 1 || 1;
    } else {
        value = event.target.previousElementSibling;
        value.textContent = parseInt(value.textContent) + 1;
    }
})
)
btnAdd.forEach((el) => el.addEventListener("click", function(event) {
    event.preventDefault();
    let product = {};
    const target = event.target.closest(".product");
    product.id = target.dataset.id;
    product.image = target.querySelector(".product__image").src;
    product.value = target.querySelector(".product__quantity-value").textContent;
    makeCartProduct(product);
})
)

function makeCartProduct(product) {
    const includ = cart.ids.find((el) => el.dataset.id == product.id);
    
    if (includ) {
        const count = includ.querySelector(".cart__product-count");
        count.textContent = parseInt(count.textContent) + parseInt(product.value);
        return;
    }

    cart.insertAdjacentHTML("beforeend", `
        <div class="cart__product" data-id="${product.id}">
            <img class="cart__product-image" src="${product.image}">
        <div class="cart__product-count">${product.value}</div>
        `);

    cart.ids.push(cart.lastChild);
}
const cart = document.getElementsByClassName("cart__products")[0];
cart.ids = [];
const control = document.querySelectorAll(".product__quantity-control");
const btnAdd = document.querySelectorAll(".product__add");


control.forEach((el) => el.addEventListener("click", function(event){
    event.preventDefault();
    decInc = event.target.className.slice(-3);
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
    product = {};
    target = event.target.closest(".product");
    product.id = target.dataset.id;
    product.image = target.querySelector(".product__image").src;
    product.value = target.querySelector(".product__quantity-value").textContent;
    makeCartProduct(product);
})
)

function makeCartProduct(product) {
    includ = cart.ids.find((el) => el.dataset.id == product.id);
    if (includ) {
        count= includ.querySelector(".cart__product-count");
        count.textContent = parseInt(count.textContent) + parseInt(product.value);
        return;
    }
    const outerdiv = document.createElement("div");
    const img = document.createElement("img");
    const innerdiv = document.createElement("div");
    outerdiv.classList.add("cart__product");
    outerdiv.dataset.id = product.id;
    img.classList.add("cart__product-image");
    img.src = product.image;
    innerdiv.classList.add("cart__product-count");
    innerdiv.textContent = product.value;
    outerdiv.append(img, innerdiv);
    cart.append(outerdiv);
    cart.ids.push(outerdiv);
}
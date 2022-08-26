const categoryItems = document.querySelectorAll('.category li');
const products = document.querySelectorAll('.popular-foods .product');
for(let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener('click', changeProduct);  
}
function changeProduct(e) {
    for(let i = 0; i < categoryItems.length; i++) {
        categoryItems[i].classList.remove('active');
    }
    e.target.classList.add('active')
    
    let valueFilter = e.target.getAttribute('data-filter');
    for(let i = 0; i < products.length; i++) {
        if(products[i].getAttribute('data-filter') === valueFilter) {
            products[i].classList.remove('hide');
        }
        else {
            products[i].classList.add('hide');
        }
    }
}
const categoryItems = document.querySelectorAll('.sidebar ul li');

const breakfastFoodList = document.querySelector('.breakfast-food-list');
const lunchFoodList = document.querySelector('.lunch-food-list');
const dinnerFoodList = document.querySelector('.dinner-food-list');
const drinksList = document.querySelector('.drinks-list');


for(let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].onclick = changeFoodList
}

function changeFoodList(e) {
    for(let i = 0; i < categoryItems.length; i++) {
        categoryItems[i].classList.remove('active-sidebar');
    }
    e.target.classList.add('active-sidebar');

    let valueFilter = e.target.getAttribute('data-filter');

    if(breakfastFoodList.getAttribute('data-filter') === valueFilter) {
        breakfastFoodList.style.display = 'block';

        lunchFoodList.style.display = 'none';
        dinnerFoodList.style.display = 'none';
        drinksList.style.display = 'none';
    }
    else if(lunchFoodList.getAttribute('data-filter') === valueFilter) {
        lunchFoodList.style.display = 'block';

        breakfastFoodList.style.display = 'none';
        dinnerFoodList.style.display = 'none';
        drinksList.style.display = 'none';
    }
    else if(dinnerFoodList.getAttribute('data-filter') === valueFilter) {
        dinnerFoodList.style.display = 'block';

        lunchFoodList.style.display = 'none';
        breakfastFoodList.style.display = 'none';
        drinksList.style.display = 'none';
    }
    else if(drinksList.getAttribute('data-filter') === valueFilter) {
        drinksList.style.display = 'block';

        dinnerFoodList.style.display = 'none';
        lunchFoodList.style.display = 'none';
        breakfastFoodList.style.display = 'none';
    }

}

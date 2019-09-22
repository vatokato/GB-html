import Slider from './slider'

new Slider();
new Slider({
  slidersContainer: '#slider2_container',
  navContainer: '#slider2_nav'
});


let prodListA = document.querySelectorAll('.products-list-section .tab-nav a');
for(let link of prodListA) {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    let target = e.target.dataset.target;
    let prodLists = e.target.parentElement.parentElement.parentElement.querySelectorAll('.product-list');
    for(let prodList of prodLists) {
      prodList.classList.remove('active');
    }
    prodLists[target].classList.add('active');

    let links = e.target.parentElement.querySelectorAll('a');
    for(let l of links) {
      l.classList.remove('active');
    }
    e.target.classList.add('active');
  })
}
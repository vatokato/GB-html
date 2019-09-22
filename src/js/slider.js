class Slider {
  constructor (params) {
    this.defs = {
      slidersContainer: '#slider_container',
      navContainer: '#slider_nav',
    }
    this.navItems = null;
    this.sliderItems = null;

    this.options = {...this.defs, ...params};
    if(document.querySelector(this.options.slidersContainer).dataset.sliderinit) return this;

    this.navClickHandler = this.navClickHandler.bind(this);

    this.init();
  };

  init () {
    document.querySelector(this.options.slidersContainer).setAttribute('data-sliderInit', true);
    this.sliderItems = [...document.querySelectorAll(this.options.slidersContainer + '>div')];
    this.navItems = [...document.querySelectorAll(this.options.navContainer + '>a')];
    for(let item of this.navItems) {
      item.addEventListener('click', this.navClickHandler);
    }
  }

  navClickHandler (e) {
    e.preventDefault();
    this.navItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
    this.sliderItems.forEach(item => item.classList.remove('active'));
    this.sliderItems[Number(e.currentTarget.dataset.slide) - 1].classList.add('active');
  }


}
export default Slider;
import createElement from '../../assets/lib/create-element.js';
import initCarousel from './caruselHelper.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.container = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>
    `)
    this.innerContainer = createElement(`
      <div class="carousel__inner"></div>
    `)

    this.slides.forEach(slide => {

      let elem = this.createElem(slide);
      this.addEvent(elem, slide);
      this.innerContainer.appendChild(elem);

    });

    this.container.appendChild(this.innerContainer)
    initCarousel(container);
  }

  get elem() {
    return this.container;
  }

  addEvent(element, slide) {
    element.querySelector('.carousel__button').addEventListener('click', (event) => {
      event.target.dispatchEvent(
        new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        })
      )
    })
  }

  createElem(slide) {
    return createElement(`
    <div class="carousel__slide" data-id="penang-shrimp">
       <img src="assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
       <div class="carousel__caption">
         <span class="carousel__price">€${slide.price.toFixed(2)}</span>
         <div class="carousel__title">${slide.name}</div>
         <button type="button" class="carousel__button">
           <img src="assets/images/icons/plus-icon.svg" alt="icon">
         </button>
       </div>
     </div>
    `)
  }



}


let slides = [
  {
    name: 'Penang shrimp',
    price: 16,
    image: 'penang_shrimp.png',
    id: 'penang-shrimp'
  },
  {
    name: 'Chicken cashew',
    price: 14,
    image: 'chicken_cashew.png',
    id: 'chicken-cashew'
  },
];

let carousel = new Carousel(slides);




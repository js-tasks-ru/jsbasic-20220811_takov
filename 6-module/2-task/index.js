import createElement from '../../assets/lib/create-element.js';


export default class ProductCard {
  #container
  constructor(product) {
    this.#container = createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div> `)

    this.#container.querySelector('.card__button').addEventListener('click', (event) => {
      event.target.dispatchEvent(
        new CustomEvent("product-add", {
          detail: product.id,
          bubbles: true
        })
      )
    })
  }

  get elem() {
    return this.#container;
  }

}


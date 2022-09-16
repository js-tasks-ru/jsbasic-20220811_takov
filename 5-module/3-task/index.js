function initCarousel() {

    let btnRight = document.querySelector(".carousel__arrow_right"),
        caruselWidth = document.querySelector(".carousel__slide").offsetWidth,
        btnLeft = document.querySelector(".carousel__arrow_left"),
        innerSlider = document.querySelector(".carousel__inner"),
        slide = document.querySelectorAll(".carousel__slide"),
        position = 0;
        btnLeft.style.display = 'none';

    btnRight.addEventListener('click', () => {

        position += caruselWidth;
        innerSlider.style.transform = `translateX(${-position}px)`;

        if (position == ((slide.length - 1 ) * caruselWidth))  {
            btnRight.style.display = 'none';
        } 
        if (position < ((slide.length - 1 ) * caruselWidth)) {
            btnLeft.style.display = '';
        }

    })

    btnLeft.addEventListener('click', () => {


        position -= caruselWidth;
        innerSlider.style.transform = `translateX(${-position}px)`;

        if (position < ((slide.length - 1 ) * caruselWidth) ) {
            btnRight.style.display = '';
        }

        if (position == 0) {
            btnLeft.style.display = 'none';
        } 


    })

}


initCarousel() 



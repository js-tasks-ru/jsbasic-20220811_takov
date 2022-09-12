function initCarousel() {

    let btnRight = document.querySelector(".carouselarrow_right"),
        caruselWidth = document.querySelector(".carousel").offsetWidth,
        btnLeft = document.querySelector(".carouselarrow_left"),
        innerSlider = document.querySelector(".carouselinner"),
        slide = document.querySelectorAll(".carouselslide"),
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



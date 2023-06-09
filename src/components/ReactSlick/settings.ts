export const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      slidesPerRow:1,
      arrows:false,
      vertical: false,
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 815,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 509,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };  
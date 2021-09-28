

  $('.sl').slick({
    // autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    slidesToShow: 1,
    slidesToScroll:1 ,
    asNavFor: '.sl2'

    // lazyLoad: 'ondemand',
    // rows:2,
    // slidesPerRow:2,
    // cssEase:'ease-in',
    // centerMode:true,
    // dots:true,

    // responsive: [
    //   {
    //   breakpoint: 1100,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows:false,
    //     dots:false
    //   }
    // },
    //    {
    //   breakpoint: 700,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows:false,
    //     dots:false
    //   }
    // }
    // ]
  });
  


  $('.sl2').slick({
    // autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    slidesToShow: 7,
    centerMode:true,
    arrows:false,

    // centerPadding:'40px',
    // lazyLoad: 'ondemand',
    // rows:2,
    // slidesPerRow:2,
    // cssEase:'ease-in',
    // centerMode:true,
    dots:true,
    dotsClass: 'my-dots',
    asNavFor: '.sl',
    focusOnSelect: true,

    responsive: [
      {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:false
      }
    },
       {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:false
      }
    }
    ]
  });
  

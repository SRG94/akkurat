$('.offers-list').slick({
	responsive: [
		{
			breakpoint: 2000,
			settings: "unslick"
		},

	  {
      breakpoint: 481,
      settings: {
				slidesToShow: 2,
				arrows: false
      }
	  },
	  {
      breakpoint: 321,
      settings: {
				slidesToShow: 1,
				arrows: false
			}
	  }] 	
})
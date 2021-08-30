$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:6
        }
    }
});

$('.loop-top').owlCarousel({
    center: false,
    items:2,
    loop:true,
    margin:75,
    dots: false,
    responsive:{
        800:{
            items:5
        },
        600: {
            items:4
        }
    }
});
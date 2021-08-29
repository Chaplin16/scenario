function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <div class=" size_parent carousel-item ${d.id == 1 ? "active" : ""} m-auto"> 
            <img src="${d.attachment}" class="size_img card-img-top" alt="${d.alt}">
        </div>` 
    })

    $(element).slick({
        dots: true,
        infinite: true,
        speed: 5,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
                      
}

carousel(".firstCarousel", shop)

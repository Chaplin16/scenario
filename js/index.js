let carousel = document.querySelector('.carousel-inner');

shop.forEach(function (element) {
    carousel.innerHTML += `
        <div class=" size_parent carousel-item ${element.id == 1 ? "active" : ""} m-auto"> 
            <img src="${element.attachment}" class="size_img card-img-top" alt="${element.alt}">
        </div>` 
})

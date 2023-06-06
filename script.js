(function () {
    var currentImage = 0;
    var myPhotos = ['image1.jpg', 'image2.jpg', "image3.jpg", 'image4.jpg', 'image5.jpg'];

    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var previousBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        }
        const newSlide = document.createElement('img');
        newSlide.src = `${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

    })

    previousBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
        const newSlide = document.createElement('img');
        newSlide.src = `${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);
    })
})()
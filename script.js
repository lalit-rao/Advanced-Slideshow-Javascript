(function () {
   var currentImage = 0;
   var myPhotos = ['./images/image1.jpg', './images/image2.jpg', "./images/image3.jpg", './images/image4.jpg', './images/image5.jpg'];

    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var previousBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        };
        const newSlide = document.createElement('img');
        newSlide.src = `./images/${myPhotos[currentImage]}`;
            newSlide.className = 'fadeinimg';
            container.appendChild(newSlide);

    })

    previousBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
    })
})()
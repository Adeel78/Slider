const carImages = {
    "car1": [
        "familycar1.jpeg",
        "familycar2.jpeg",
        "familycar3.jpeg",
       
        
    ],
    "car2": [
        "sportscar.jpeg",
        "sportscar2.jpeg",
        "sportscar3.jpeg"
    ],
    // Add more cars and images as needed
};

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.getElementById("slides");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentCarId = "car2"; // Default car id
    let currentImageIndex = 0;

    function displayImages(carId) {
        slidesContainer.innerHTML = "";
        const img = document.createElement("img");
        img.src = carImages[carId][currentImageIndex];
        slidesContainer.appendChild(img);
    }

    prevButton.addEventListener("click", function () {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = carImages[currentCarId].length - 1;
        }
        displayImages(currentCarId);
    });

    nextButton.addEventListener("click", function () {
        if (currentImageIndex < carImages[currentCarId].length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        displayImages(currentCarId);
    });

    displayImages(currentCarId);
});
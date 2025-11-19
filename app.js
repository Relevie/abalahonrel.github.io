(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    const viewButtons = document.querySelectorAll('.view-button');
    const modalContainer = document.querySelector('.modal-container');
    const modalImage = document.querySelector('.modal-image');
    const closeButton = document.querySelector('.close-button');

    viewButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // Get the corresponding image source
            const imageUrl = this.closest('.portfolio-item').dataset.image;

            // Set the modal image source
            modalImage.src = imageUrl;

            // Display the modal
            modalContainer.style.display = 'flex';
        });
    });

    // Add event listener for the close button in the modal
    closeButton.addEventListener('click', function () {
        // Hide the modal
        modalContainer.style.display = 'none';
    });
})();

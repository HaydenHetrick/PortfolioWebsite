document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to change image and link
    function changeImageAndLink(buttonNumber) {
        var button = document.getElementById('button' + buttonNumber);
        var imageSource = 'button' + buttonNumber + '.png'; // Image source for the button
        var linkURL = 'https://github.com/HaydenHetrick'; // Link URL for the button

        // Update button's HTML content and href attribute
        button.innerHTML = '<img src="' + imageSource + '" alt="Button ' + buttonNumber + ' Image">';
        button.setAttribute('href', linkURL);
    }
});

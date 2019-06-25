$(document).ready(function() {
    // Add smooth scrolling to all links
    $('a.start-button, a.back-to-top').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                700,
                function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = '';
                }
            );
        } // End if
    });
});

var body = document.querySelector('body');
var hamburger = document.querySelector('.delicious-hamburger');
hamburger.addEventListener('click', function() {
    if (body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
    } else {
        body.classList.add('nav-open');
    }
});

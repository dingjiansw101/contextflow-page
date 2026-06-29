// Initialize Bulma carousel / slider extensions if any are present on the page.
document.addEventListener('DOMContentLoaded', function () {
  try {
    if (window.bulmaCarousel && document.querySelector('.carousel')) {
      window.bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        autoplay: false,
      });
    }
  } catch (e) { /* no-op */ }

  try {
    if (window.bulmaSlider) { window.bulmaSlider.attach(); }
  } catch (e) { /* no-op */ }

  // Smooth-scroll for in-page anchor links.
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var el = document.querySelector(id);
        if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
      }
    });
  });
});

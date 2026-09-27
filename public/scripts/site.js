// Progressive enhancement only: content is fully visible without this file.
document.documentElement.classList.add('js');

(function () {
  var rotator = document.querySelector('[data-rotator]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (rotator && !reduce) {
    try {
      var words = JSON.parse(rotator.getAttribute('data-words') || '[]');
      var i = 0;
      if (words.length > 1) {
        setInterval(function () {
          rotator.classList.add('is-fading');
          setTimeout(function () {
            i = (i + 1) % words.length;
            rotator.textContent = words[i];
            rotator.classList.remove('is-fading');
          }, 350);
        }, 2600);
      }
    } catch (e) { /* keep static word */ }
  }

  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();

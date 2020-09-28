window.onload = function() {
  const $sections = document.querySelectorAll("section");
  const $li = document.querySelectorAll("li");

  const removeListClasses = () => {
    $li.forEach($el => $el.classList.remove("active"));
  };

  const callback = entries => {
    entries.forEach(entry => {
      // If each section hits the top of the browser, it `intersects`.
      if (
        entry.intersectionRect.y > -1 &&
        entry.intersectionRect.y < entry.intersectionRect.height + 1
      ) {
        const $h2 = entry.target.querySelector("h2");
        const $a = document.querySelector(`a[href='#${$h2.id}']`);
        const $li = $a.parentNode;
        removeListClasses();
        $li.classList.toggle("active");
      }
    });
  };

  const observer = new window.IntersectionObserver(callback, {
    threshold: 1.0,
    rootMargin: "0px 0px 0px 0px"
  });

  $sections.forEach(el => observer.observe(el));
  // observer.unobserve(el) if using React hooks.
};

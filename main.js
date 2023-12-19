function toggleVisualMode() {
  let doc = document.querySelector('html');
  let currenttheme = doc.getAttribute('data-bs-theme');
  let lightmodethings = document.querySelectorAll('.lightMode');
  let darkmodethings = document.querySelectorAll('.darkMode');
  console.log(currenttheme);
  if (currenttheme === 'light') {
    doc.setAttribute('data-bs-theme', 'dark');
    for (el of lightmodethings) {
      el.style.display = 'none';
    }
    for (el of darkmodethings) {
      if (el.tagName === 'svg') {
        el.style.display = 'inline';
      } else {
        el.style.display = 'block';
      }
    }
  } else if (currenttheme === 'dark') {
    doc.setAttribute('data-bs-theme', 'light');
    for (el of lightmodethings) {
      if (el.tagName === 'svg') {
        el.style.display = 'inline';
      } else {
        el.style.display = 'block';
      }
    }
    for (el of darkmodethings) {
      el.style.display = 'none';
    }
  }
}
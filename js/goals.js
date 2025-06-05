fetch("components/homeHeader.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("home-header").innerHTML = data;

    // Now the header is loaded, we can safely attach the event listener
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
});

fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Now the header is loaded, we can safely attach the event listener
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
});

fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
});

const cards = document.querySelectorAll('.goal-card1, .goal-card2, .goal-card3');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.textContent = card.getAttribute('data-hover');
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.textContent = card.getAttribute('data-default');
    card.classList.remove('hovered');
  });

});




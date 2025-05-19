fetch("components/homeHeader.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("home-header").innerHTML = data;
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





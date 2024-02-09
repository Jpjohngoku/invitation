document.getElementById('clickableBtn').addEventListener('click', function () {
  
  // Hide dynamic button
  const dynamicBtn = document.getElementById('dynamicBtn');
  dynamicBtn.style.display = 'none';

  // Hide image button
  const imageCat = document.getElementById('cat');
  imageCat.style.display = 'none';

  // Hide image button
  const text1 = document.getElementById('text1');
  text1.style.display = 'none';

  const text2 = document.getElementById('text2');
  text2.style.display = 'none';

  const text3 = document.getElementById('text3');
  text3.style.display = 'none';

  // Display raining hearts
  const heartContainer = document.createElement('div');
  heartContainer.className = 'heart-container';
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Vary animation duration
    heart.style.width = `${Math.random() * 30 + 10}px`; // Vary width
    heart.style.height = `${Math.random() * 30 + 10}px`; // Vary height
    heartContainer.appendChild(heart);
  }
  document.body.appendChild(heartContainer);

  // Display image popup
  const imageUrl = 'kiss.jpg'; // Replace with the actual path or URL of your popup image
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = 
    `
    <img src="${imageUrl}" alt="Popup Image">
    <p>Yayy !!!</p>
    `;
  document.body.appendChild(modal);
});


// Rest of the code remains unchanged


// Add more JavaScript functionality as needed.
function getRandomPosition() {
  const maxWidth = window.innerWidth - 50; // Adjust based on button width
  const maxHeight = window.innerHeight - 50; // Adjust based on button height
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  return { left: randomX + 'px', top: randomY + 'px' };
}

function moveRandomly() {
  const dynamicBtn = document.getElementById('dynamicBtn');
  const randomPosition = getRandomPosition();

  dynamicBtn.style.left = randomPosition.left;
  dynamicBtn.style.top = randomPosition.top;
}

setInterval(moveRandomly, 300); // Adjust the interval as needed
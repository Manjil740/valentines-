let yesButton = document.getElementById("yesButton");
let sticker = document.getElementById("sticker");
let noButton = document.querySelector(".no-button");
let clickCount = 0; // Counter to track clicks

const messages = [
  "Please say yes! 🥺",
  "Pleaseeeee! 🥹",
  "Think of it once again! 🤔",
  "Don't say no, please! 😢",
  "Are you sure? 😭",
  "Come on, say yes! 🥰",
  "I promise it'll be amazing! 💖",
  "One last chance to say yes! 💞"
];

function handleNo() {
  clickCount++;

  // Display sticker with a new message
  sticker.classList.add("active");
  let newMessage = messages[Math.min(clickCount - 1, messages.length - 1)];
  sticker.innerHTML = `<img src='cute.png' alt='Please say yes!' /><p>${newMessage}</p>`;

  // Increase only the "Yes" button size
  yesButton.style.transform = `scale(${1 + clickCount * 0.3})`;

  // Disable "No" button after 5 clicks
  if (clickCount >= messages.length) {
    noButton.disabled = true;
    noButton.innerText = "You have no choice! 😆";
  }
}

// 💖 Handle the "Yes" button click
function handleYes() {
  // Create a pop-up container dynamically
  let popup = document.createElement("div");
  popup.classList.add("popup");

  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-button" onclick="closePopup()">×</span>
      <h2>💖 I Love You Sooo Much! 💖</h2>
      <p>💞 I promise to keep you happy for a lifetime. 💞</p>
      <p>💍 I vow to be your Valentine in every life, every universe! 💍</p>
      <p>💫 You are my forever and always! 💫</p>
    </div>
  `;

  document.body.appendChild(popup);

  // Add fade-in and float-up effect
  setTimeout(() => {
    popup.classList.add("active");
  }, 100);
}

// 💖 Close the pop-up
function closePopup() {
  let popup = document.querySelector(".popup");
  popup.classList.remove("active");

  // Remove from DOM after animation
  setTimeout(() => {
    popup.remove();
  }, 500);
}

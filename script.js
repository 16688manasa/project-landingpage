const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Register link click → show registration form
if (registerLink) {
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });
}

// Login link click → show login form
if (loginLink) {
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });
}

// Login button click → open popup
if (btnPopup) {
  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });
}

// Close icon click → close popup
if (iconClose) {
  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  });
} 











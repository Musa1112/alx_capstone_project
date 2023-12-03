// const signupSection = document.getElementById('signup-section');
// const signinSection = document.getElementById('signin-section');
// const receiptUploadSection = document.getElementById('receipt-upload-section');

// // Hide all sections initially
// signupSection.style.display = 'show';
// signinSection.style.display = 'shpw';
// receiptUploadSection.style.display = 'show';

// // Sign Up form submission
// const signupForm = document.getElementById('signup-form');
// signupForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const signupEmail = document.getElementById('signup-email').value;
//   const signupPassword = document.getElementById('signup-password').value;

//   // Implement signup logic here using signupEmail and signupPassword
//   // Once successful signup, hide signup section and show receipt upload section
// });

// // Sign In form submission
// const signinForm = document.getElementById('signin-form');
// signinForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const signinEmail = document.getElementById('signin-email').value;
//   const signinPassword = document.getElementById('signin-password').value;

//   // Implement signin logic here using signinEmail and signinPassword
//   // Once successful signin, hide signin section and show receipt upload section
// });

// const userSignedIn = false; // Initialize sign-in status

// const signupSection = document.getElementById('signup-section');
// const signinSection = document.getElementById('signin-section');
// const receiptUploadSection = document.getElementById('receipt-upload-section');

// // Hide all sections initially
// signupSection.style.display = 'none';
// signinSection.style.display = 'none';






const userSignedIn = false; // Initialize sign-in status

const signupSection = document.getElementById('signup-section');
const signinSection = document.getElementById('signin-section');
const receiptUploadSection = document.getElementById('receipt-upload-section');

// Initially, show the signup section
signupSection.style.display = 'block';

// Toggle visibility based on action
function toggleSectionVisibility(showSection) {
  if (showSection === 'signup') {
    signupSection.style.display = 'block';
    signinSection.style.display = 'none';
    receiptUploadSection.style.display = 'none';
  } else if (showSection === 'signin') {
    signupSection.style.display = 'none';
    signinSection.style.display = 'block';
    receiptUploadSection.style.display = 'none';
  } else if (showSection === 'receiptUpload') {
    signupSection.style.display = 'none';
    signinSection.style.display = 'none';
    receiptUploadSection.style.display = 'block';
  }
}

// Add click event listeners to toggle sections
document.getElementById('signup-link').addEventListener




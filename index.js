// Write your code in this file!
// Declare a constant currentUser
const currentUser = 'Grace Hopper';

// Create a welcome message using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited version of the welcome message using toUpperCase()
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting that includes only the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

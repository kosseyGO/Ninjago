// Define the array of navigation links and their corresponding URLs
const navigationLinks = [
    { text: 'Home', url: 'https://github.com/kosseyGO/ninjago/index.html' },
    { text: 'Watch', url: 'c:/users/kossey/Documents/Site/watch.html' },
    { text: 'Games', url: 'c:/users/kossey/Documents/Site/games.html' },
    { text: 'Info', url: 'c:/users/kossey/Documents/Site/info.html' },
    { text: 'Contact', url: 'c:/users/kossey/Documents/Site/contact.php' },
    // Add more links as needed
];

// Function to create the navigation bar dynamically
function createNavigationBar() {
    const navElement = document.getElementById('navigation');

    // Create the logo image element
    const logoImage = document.createElement('img');
    logoImage.src = 'https://github.com/kosseyGO/ninjago/logo.png';
    logoImage.alt = 'My Logo';
    navElement.appendChild(logoImage);

    navigationLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.textContent = link.text;
        linkElement.href = link.url;
        navElement.appendChild(linkElement);
    });
}

// Call the function to create the navigation bar on page load
window.onload = createNavigationBar;

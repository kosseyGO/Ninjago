// Define the array of navigation links and their corresponding URLs
const navigationLinks = [
    { text: 'Home', url: '../index.html' },
    { text: 'Watch', url: '../watch.html' },
    { text: 'Games', url: '../games.html' },
    { text: 'Info', url: '../info.html' },
    { text: 'Contact', url: '../contact.php' },
    // Add more links as needed
];

// Function to create the navigation bar dynamically
function createNavigationBar() {
    const navElement = document.getElementById('navigation');

    // Create the logo image element
    const logoImage = document.createElement('img');
    logoImage.src = '../logo.png';
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

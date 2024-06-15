// Select the mode button
const modeButton = document.querySelector('.right-align');
const modeIcon = document.getElementById('mode-icon');

// Function to toggle between light and dark modes
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        // SVG for dark mode (moon icon)
        modeIcon.innerHTML = '<path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>'
    } else {
        // SVG for light mode (sun icon)
        modeIcon.innerHTML = '<path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">';
    }
    
    // Also toggle for nav-bar and links
    document.querySelector('.nav-bar').classList.toggle('dark-mode');
    document.querySelector('.nav-bar').classList.toggle('light-mode');

    document.querySelectorAll('a').forEach(link => {
        link.classList.toggle('dark-mode');
        link.classList.toggle('light-mode');
    });
}

// Attach the event listener
modeButton.addEventListener('click', toggleMode);

// Set default mode based on user preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.a.classList.add('dark-mode');
    document.li.span.classList.add('dark-mode');
    document.querySelector('.nav-bar').classList.add('dark-mode');
    document.querySelectorAll('a').forEach(link => link.classList.add('dark-mode'));
} else {
    document.body.classList.add('light-mode');
    document.a.classList.add('light-mode');
    document.li.span.classList.add('light-mode');
    document.querySelector('.nav-bar').classList.add('light-mode');
    document.querySelectorAll('a').forEach(link => link.classList.add('light-mode'));
}

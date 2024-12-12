// Array con los enlaces a los que el botón puede redirigir
const links = [
    'https://www.google.com',
    'https://www.apple.com/',
    'https://www.github.com',
    'https://www.youtube.com',
    'https://www.uade.edu.ar'
];

// Selecciona el botón "Voy a tener suerte"
const luckButton = document.getElementById('redirect-button');

luckButton.addEventListener('click', redirectFunction)

function redirectFunction(event) {
    const randomIndex = Math.floor(Math.random() * links.length);
    let href = links[randomIndex]
    window.open(href)
}

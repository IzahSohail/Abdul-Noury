function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(err => console.error('Error loading HTML:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('navbar', 'navbar.html');
});

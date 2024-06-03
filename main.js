function toggleButton() {
    const toggleButton = document.querySelector(".switch-btn");
    toggleButton.classList.toggle('right');
    const icon = toggleButton.querySelector('i');
    const title = document.querySelector('.title');
    document.body.classList.toggle('dark-mode');
    
    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        title.textContent = 'Light Mode';
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        title.textContent = 'Dark Mode';
    }
}

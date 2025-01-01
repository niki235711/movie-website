document.addEventListener('DOMContentLoaded', () =>
     {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.className = currentTheme;

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.className === 'light-theme' ? 'dark-theme' : 'light-theme';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const githubIcon = document.getElementById('githubIcon')
const html = document.documentElement;
const body = document.body;

       // Check for saved theme preference or default to 'light'
        let currentTheme = 'light';

        function setTheme(theme) {
            currentTheme = theme;
            
            if (theme === 'dark') {
                // Dark mode styles
                body.classList.remove('bg-white', 'text-gray-900');
                body.classList.add('bg-gray-900', 'text-gray-100');
                
                // Update icon color
                themeIcon.classList.remove('sun-icon');
                themeIcon.classList.add('moon-icon');

                // Update GitHub icon color
                githubIcon.classList.remove('github-light');
                githubIcon.classList.add('github-dark');
                
                // Update page styling
                const card = document.querySelector('.shadow-lg');
                card.classList.remove('bg-white', 'text-gray-900');
                card.classList.add('bg-gray-800', 'text-gray-100');
                
            } else {
                // Light mode styles
                body.classList.remove('bg-gray-900', 'text-gray-100');
                body.classList.add('bg-white', 'text-gray-900');
                
                // Update icon color
                themeIcon.classList.remove('moon-icon');
                themeIcon.classList.add('sun-icon');

                // Update GitHub icon color
                githubIcon.classList.remove('github-dark');
                githubIcon.classList.add('github-light');
                
                // Update page styling
                const card = document.querySelector('.shadow-lg');
                card.classList.remove('bg-gray-800', 'text-gray-100');
                card.classList.add('bg-white', 'text-gray-900');
                
            }
        }

        // Initialize theme
        setTheme('light');

        // Toggle theme on click
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
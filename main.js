document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme Toggle Logic
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }

        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙 Dark Mode';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️ Light Mode';
            }
        });
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const lottoNumbers = generateLottoNumbers();
            displayLottoNumbers(lottoNumbers);
        });
    }
        const lottoNumbers = generateLottoNumbers();
        displayLottoNumbers(lottoNumbers);
    });

    // Disqus Integration
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://product-builder-lecture.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        for (const number of numbers) {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            lottoNumbersContainer.appendChild(numberElement);
        }
    }
});

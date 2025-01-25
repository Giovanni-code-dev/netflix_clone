



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const hiddenRows = document.querySelectorAll('.hidden');
    hiddenRows.forEach((row) => observer.observe(row));
});



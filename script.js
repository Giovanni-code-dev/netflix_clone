const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting && !target.classList.contains('visible')) {
            // Se l'elemento entra nella viewport ed è nascosto
            target.classList.add('visible', 'animate-show');
            target.classList.remove('hidden', 'animate-hide');
        } else if (!entry.isIntersecting && target.classList.contains('visible')) {
            // Se l'elemento esce dalla viewport ed è visibile
            target.classList.add('hidden', 'animate-hide');
            target.classList.remove('visible', 'animate-show');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const hiddenRows = document.querySelectorAll('.hidden');
    hiddenRows.forEach((row) => observer.observe(row));
});

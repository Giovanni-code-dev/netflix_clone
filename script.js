document.addEventListener("DOMContentLoaded", () => {
    // Seleziona tutte le righe con la classe "row"
    const rows = document.querySelectorAll(".row.hidden");

    // Configura l'osservatore
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Aggiungi una classe per attivare l'animazione
                    entry.target.classList.add("show");
                    entry.target.classList.remove("hidden");
                    // Smette di osservare l'elemento una volta mostrato
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null, // Usa il viewport come area di riferimento
            rootMargin: "0px",
            threshold: 0.2, // Mostra l'elemento quando il 20% è visibile
        }
    );

    // Osserva ogni riga
    rows.forEach((row) => {
        observer.observe(row);
    });
});


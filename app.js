document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('filter-container');
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#projects-grid .modern-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterTarget = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardTagsString = card.getAttribute('data-tags') || '';
                const cardTagsArray = cardTagsString.split(',').map(tag => tag.trim());

                if (filterTarget === 'all' || cardTagsArray.includes(filterTarget)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
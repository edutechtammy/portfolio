// Accordion functionality for chevron rotation
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('details').forEach((detail) => {
        detail.addEventListener('toggle', () => {
            const chevron = detail.querySelector('.chevron');
            if (chevron) {
                if (detail.open) {
                    chevron.style.transform = 'rotate(180deg)';
                } else {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});

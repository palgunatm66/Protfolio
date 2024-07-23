document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'translateY(-10px)';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'translateY(0)';
        });
    });
});
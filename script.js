// Custom cursor animation (smooth transition on hover)
document.body.addEventListener('mousemove', (e) => {
    let cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
});

document.body.addEventListener('mouseenter', () => {
    let cursor = document.querySelector('.cursor');
    cursor.style.transition = 'all 0.15s ease';
});

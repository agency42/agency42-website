document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const readLessBtn = document.querySelector('.read-less-btn');
    const thesisFull = document.querySelector('.thesis-full');
    const thesisPreview = document.querySelector('.thesis-preview');

    readMoreBtn?.addEventListener('click', () => {
        thesisFull.style.display = 'block';
        thesisPreview.style.display = 'none';
        readMoreBtn.style.display = 'none';
    });

    readLessBtn?.addEventListener('click', () => {
        thesisFull.style.display = 'none';
        thesisPreview.style.display = 'block';
        readMoreBtn.style.display = 'block';
    });
});
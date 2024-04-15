document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; // Saia se não houver slides

    let currentIndex = 0; // Inicia no primeiro slide
    slides[currentIndex].classList.add('active'); // Inicia o primeiro slide como ativo

    function changeSlide() {
        slides[currentIndex].classList.remove('active'); // Remove a classe ativa do slide atual
        currentIndex = (currentIndex + 1) % slides.length; // Atualiza o índice para o próximo slide
        slides[currentIndex].classList.add('active'); // Adiciona a classe ativa ao novo slide
    }

    setInterval(changeSlide, 10000); // Muda o slide a cada 5 segundos
});

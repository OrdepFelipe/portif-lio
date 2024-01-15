document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.getElementById("carrossel");
    const itens = document.querySelectorAll(".carousel-item");
    const totalItens = itens.length;
    let currentIndex = 0;

    function nextItem() {
        if (currentIndex < totalItens - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevItem() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItens - 1;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + "%";
        carrossel.style.transform = "translateX(" + newTransformValue + ")";
    }

    setInterval(nextItem, 15000); // Alterna automaticamente a cada 15 segundos

    document.getElementById("proximo").addEventListener("click", nextItem);
    document.getElementById("anterior").addEventListener("click", prevItem);
});
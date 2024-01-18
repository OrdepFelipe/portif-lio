document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const targetId = event.target.dataset.target;
            const descricao = document.getElementById(targetId);
            toggleDescricao(descricao);
        });
    }
});

function toggleDescricao(descricao) {
    descricao.classList.toggle('projetos__container__descricao--ativo');
}


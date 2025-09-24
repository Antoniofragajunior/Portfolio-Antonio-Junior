// Alternar entre temas claro e escuro
const btnTema = document.getElementById('btnTema');
const tema = localStorage.getItem('tema') || 'escuro';

document.documentElement.setAttribute('data-tema', tema);
atualizarIconeTema(tema);

btnTema.addEventListener('click', () => {
    const novoTema = document.documentElement.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.setAttribute('data-tema', novoTema);
    localStorage.setItem('tema', novoTema);
    atualizarIconeTema(novoTema);
});

function atualizarIconeTema(tema) {
    btnTema.innerHTML = tema === 'escuro' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// Barra de progresso de scroll
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.querySelector('.progresso-scroll').style.width = scrolled + '%';
});

// Função WhatsApp
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5599982422036";

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
}

// Animação de elementos quando entram na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});


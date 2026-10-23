const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const nome = document.getElementById('nome').value;

    localStorage.setItem('usuarioFeminismo', nome);

    alert(`Obrigado, ${nome}! Seus dados foram registrados.`);

    window.location.href = './index.html';
});
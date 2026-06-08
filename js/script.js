/* AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Lançamentos de filmes e séries
Aluno 1: Sabrina Alves Andrade Pereira - RA: 251336
Aluno 2: Raquel Helena Caetano Pinheiro - RA: 252414
Professor: Abimael de Oliveira
Data de entrega: 07/06 */2026


// botão de voltar ao topo
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}


function filtrar(categoria) {
    const itens = document.querySelectorAll('.item');

    itens.forEach(function(item) {
        if (categoria === 'todos') {
            item.style.display = 'block';
        } else if (item.classList.contains(categoria)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const formulario = document.querySelector('#formContato');

if (formulario) {

    formulario.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;
        const assunto = document.querySelector('#assunto').value;
        const telefone = document.querySelector('#telefone').value;



        if(nome === '' || email === '' || mensagem === '') {

            alert('Por favor, preencha os campos obrigatórios.');

        } else {

            alert('Mensagem enviada com sucesso!');
            formulario.reset();

        }

    });

}
/* AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Nome do tema escolhido
Aluno 1: Nome completo - RA: XXXXX
Aluno 2: Nome completo - RA: XXXXX
Professor: Abimael de Oliveira
Data de entrega: 07/06 */


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
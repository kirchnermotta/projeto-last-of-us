// botao e aparecer a imagem//
//passo 1 = ter os botoes//
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens=document.querySelectorAll('.imagem')


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoselecionado = document.querySelector('.selecionado')
        botaoselecionado.classList.remove('selecionado')

        //passo4
        botao.classList.add('selecionado')
        //passo5
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('.ativa');
        //passo6
        imagens[indice].classList.add('ativa')
    })

})

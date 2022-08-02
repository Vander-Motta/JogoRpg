const canvas = document.querySelector('canvas'); //constante que seleciona a tela
const c = canvas.getContext('2d');

canvas.width = 1024 ;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height)

const personagemjogador = new Image()
personagemjogador.src='./Imagens/playerDown.png'

const Imagem = new Image()
Imagem.src = './Imagens/maparpg.png'




Imagem.onload = () => {
    c.drawImage(Imagem, -217, -860)
    c.drawImage(personagemjogador,
                0,
                0,
                personagemjogador.width / 4,
                personagemjogador.height,
                
                canvas.width / 2 - (personagemjogador.width / 4) / 2,
                canvas.height  / 2 - personagemjogador.height / 2,


                personagemjogador.width / 4,
                personagemjogador.height
                
                 
        )
}
// Este Primeiro Bloco se trata da configuração do Canvas e a importação do Mapa para dentro do Projeto



const canvas = document.querySelector('canvas'); //constante que seleciona a tela
const c = canvas.getContext('2d');

canvas.width = 1333 ;
canvas.height = 776;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height)

const Imagem = new Image()
Imagem.src = './Imagens/maparpg.png'

console.log(Imagem)

Imagem.onload = () => {
    c.drawImage(Imagem, -400, -700)
}
// Este Primeiro Bloco se trata da configuração do Canvas e a importação do Mapa para dentro do Projeto



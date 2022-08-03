const canvas = document.querySelector('canvas'); //constante que seleciona a tela
const c = canvas.getContext('2d');

canvas.width = 1024 ;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height)

//Primeiro Bloco de configuração de tela


const personagemjogador = new Image()
personagemjogador.src='./Imagens/playerDown.png'

const mapa = new Image()
mapa.src = './Imagens/maparpg.png'

//Segundo Bloco seleciona o mapa e o personagem e salva em constante

class Sprite {
   constructor({posicao, velocidade, mapa}){
        this.posicao = posicao
        this.mapa = mapa
   }

   draw(){
        //c.drawImage(this.imagem, -785, -650)
        c.drawImage(this.mapa, -217, -860)
   }


}


const fundo = new Sprite({
        posicao: {
           x: -785,
           y: -650
        },
        mapa: mapa
})


const keys = {
        w: {
           pressionado: false     
        },

        
}


function animação (){
       window.requestAnimationFrame(animação)
    fundo.draw()
    c.drawImage(personagemjogador,
                0,
                0,
                personagemjogador.width / 4,
                personagemjogador.height,
                
                canvas.width / 2 - (personagemjogador.width / 4) / 2, //posição x
                canvas.height  / 2 - personagemjogador.height / 2, //posição y


                personagemjogador.width / 4,
                personagemjogador.height
                //tamanho real do personagem na tela
                 
        )
}
animação()

window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
                keys.w.pressionado = true
                break
        case 's':
                console.log('pressionou s');
                break
        case 'a':
                console.log('pressionou a');
                break 
        case 'd':
                 console.log('pressionou d');
                break               
      }
})



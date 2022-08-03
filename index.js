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
        c.drawImage(this.mapa, this.posicao.x, this.posicao.y)
   }


}


const fundo = new Sprite({
        posicao: {
           x: -215,
           y: -850
        },
        mapa: mapa
})


const keys = {
        w: {
              pressionado: false     
        },
        s: {
              pressionado: false     
        },
        a: {
              pressionado: false     
        },
        d: {
              pressionado: false
        }

        
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
     if(keys.w.pressionado)fundo.posicao.y += 3
     else if(keys.a.pressionado)fundo.posicao.x += 3
     else if(keys.s.pressionado)fundo.posicao.y -=3
     else if(keys.d.pressionado)fundo.posicao.x -=3 
}
animação()

window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
                keys.w.pressionado = true
                break
        case 's':
                keys.s.pressionado = true
                break
        case 'a':
                keys.a.pressionado = true
                break 
        case 'd':
                keys.d.pressionado = true 
                break               
      }
})



window.addEventListener('keyup', (e) => {
        switch (e.key) {
          case 'w':
                  keys.w.pressionado = false
                  break
          case 's':
                  keys.s.pressionado = false
                  break
          case 'a':
                  keys.a.pressionado = false
                  break 
          case 'd':
                  keys.d.pressionado = false
                  break               
        }
  })


console.log(keys)

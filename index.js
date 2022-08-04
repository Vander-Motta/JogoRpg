const canvas = document.querySelector('canvas'); //constante que seleciona a tela
const c = canvas.getContext('2d');

canvas.width = 1024 ;
canvas.height = 576;

const colisaoMapa = []
for (let i = 0; i < colisao.length; i += 70){
   colisaoMapa.push(colisao.slice(i, 70 + i));
 }


 class limite {
        static width = 48
        static height = 48
      constructor({posicao}){
      this.posicao = posicao
      this.width = 48
      this.height = 48
      }

      draw(){
        c.fillStyle ='red'
        c.fillRect(this.posicao.x, this.posicao.y, this.width, this.height)
      }
 }

//Primeiro Bloco de configuração de tela
const limites = []
const deslocamento = {
        x: -16,
        y: -540
}


colisaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) =>  {
        if(symbol === 1025)
        limites.push()
        
    })
})



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


}


const fundo = new Sprite({
        posicao: {
           x: deslocamento.x,
           y: deslocamento.y
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

const testeLimite = new limite({
        posicao: {
           x: 400,
           y: 400     
        }
})


const moveis = [fundo, testeLimite]
function animação (){
       window.requestAnimationFrame(animação)
    fundo.draw()
   // limites.forEach(limite => {
       // limite.draw()
  //  })
  testeLimite.draw()
    
     //if(personagemjogador.posicao.x + personagemjogador.width)  
        
     if(keys.w.pressionado){
          moveis.forEach((movel) => {
            movel.posicao.y +=2
          })
        }       
     else if(keys.a.pressionado){
        moveis.forEach((movel) => {
                movel.posicao.x +=2
              })
       
        }
     else if(keys.s.pressionado){
        moveis.forEach((movel) => {
                movel.posicao.y -=2
              })
        }
     else if(keys.d.pressionado){
        moveis.forEach((movel) => {
                movel.posicao.x -=2
              })
        }
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



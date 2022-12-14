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
      this.width = 10
      this.height = 10
      }

      draw(){
        c.fillStyle ='rgba(255, 0, 0, 0.0)'
        c.fillRect(this.posicao.x, this.posicao.y, this.width, this.height)
      }
 }


const limites = []
const deslocamento = {
        x: -16,
        y: -540
}


colisaoMapa.forEach((row, i) => {
        row.forEach((symbol, j)=>{
          if(symbol === 1025)
           limites.push(
                new limite({
                  posicao:{
                 x: j*limite.width + deslocamento.x,
                 y:i*limite.height + deslocamento.y      
                  }      
                })
           )     
        })
})
   



const personagemjogador = new Image()
personagemjogador.src='./Imagens/playerDown.png'   //down

const personagemjogadorUp = new Image()
personagemjogadorUp.src='./Imagens/playerUp.png'

const personagemjogadorLeft = new Image()
personagemjogadorLeft.src='./Imagens/playerLeft.png'

const personagemjogadorRight = new Image()
personagemjogadorRight.src='./Imagens/playerRight.png'

const mapa = new Image()
mapa.src = './Imagens/maparpg.png'

//Segundo Bloco seleciona o mapa e o personagem e salva em constante

class Sprite {
   constructor({posicao, velocidade, mapa, frames = {max: 1}, sprites }) {
        this.posicao = posicao
        this.mapa = mapa
        this.frames = {...frames, val: 0, elapsed: 0}
        

        this.mapa.onload = () =>{
           this.width = this.mapa.width / this.frames.max
           this.height = this.mapa.height
           console.log(this.width),
           console.log(this.height) 
        }
       this.movimento = false
       this.sprites = sprites 
   }

   draw(){
        //c.drawImage(this.imagem, -785, -650)
        //c.drawImage(this.mapa, this.posicao.x, this.posicao.y)
        c.drawImage(this.mapa,
                this.frames.val * this.width,
                0,
                this.mapa.width / this.frames.max,
                this.mapa.height,
                this.posicao.x,
                this.posicao.y,
                this.mapa.width / this.frames.max,
                this.mapa.height
                //tamanho real do personagem na tela
                 
        )
        if(!this.movimento) return
        if (this.frames.max > 1){
            this.frames.elapsed++
        }        
        if(this.frames.elapsed % 13 === 0){
        if(this.frames.val < this.frames.max -1 ) this.frames.val++   
        else this.frames.val = 0   
        } 
        
        
   }


}

              //  
             //   canvas.height  / 2 - this.mapa.height / 2, //posi????o y

const jogador = new Sprite({
    posicao: {
        x: canvas.width / 2 - 192 / 4 / 2, //posi????o x
        y: canvas.height  / 2 - 68 / 2, //posi????o y
    },
    mapa: personagemjogador,
    frames:{
        max: 4
    },
    sprites:{
     up: personagemjogadorUp,
     down: personagemjogador,
     left: personagemjogadorLeft,
     rigth: personagemjogadorRight    
    }    
})        
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

//const testeLimite = new limite({
       // posicao: {
    //       x: 400,
    //       y: 400     
   //     }
//})


const moveis = [fundo, ...limites]

function colisaoRetangular({retangulo1, retangulo2}){
        return( retangulo1.posicao.x + retangulo1.width >= retangulo2.posicao.x &&
                retangulo1.posicao.x <= retangulo2.posicao.x + retangulo2.width &&
                retangulo1.posicao.y <= retangulo2.posicao.y + retangulo2. height &&
                retangulo1.posicao.y + retangulo1.height >= retangulo2.posicao.y  
        )

}
function anima????o (){
       window.requestAnimationFrame(anima????o)
    fundo.draw()
    limites.forEach(Limite => {
        Limite.draw()
   })
  ///testeLimite.draw()
  jogador.draw()
    let movimento = true
    jogador.movimento = false
      if(keys.w.pressionado){
        jogador.movimento=true
        jogador.mapa = jogador.sprites.up
          for (let i = 0; i < limites.length; i++){
             const Limite = limites [i]
           if(
                 colisaoRetangular({
                retangulo1: jogador,
                retangulo2: {...Limite, 
                   posicao: {
                   x: Limite.posicao.x,
                   y:Limite.posicao.y + 2
                }}       
                })
             ){
                console.log('colidindo')
                movimento = false
                break
              }      
          }
          if(movimento)
          moveis.forEach((movel) => {
            movel.posicao.y +=2
          })
        }       
     else if(keys.a.pressionado){
        jogador.movimento=true
        jogador.mapa = jogador.sprites.left
        for (let i = 0; i < limites.length; i++){
                const Limite = limites [i]
              if(
                    colisaoRetangular({
                   retangulo1: jogador,
                   retangulo2: {...Limite, 
                      posicao: {
                      x: Limite.posicao.x + 2,
                      y:Limite.posicao.y
                   }}       
                   })
                ){
                   console.log('colidindo')
                   movimento = false
                   break
                 }      
             }
             if(movimento)
        moveis.forEach((movel) => {
                movel.posicao.x +=2
              })
       
        }
     else if(keys.s.pressionado){
        jogador.movimento=true
        jogador.mapa = jogador.sprites.down
        for (let i = 0; i < limites.length; i++){
                const Limite = limites [i]
              if(
                    colisaoRetangular({
                   retangulo1: jogador,
                   retangulo2: {...Limite, 
                      posicao: {
                      x: Limite.posicao.x,
                      y:Limite.posicao.y - 2
                   }}       
                   })
                ){
                   console.log('colidindo')
                   movimento = false
                   break
                 }      
             }
             if(movimento)
        moveis.forEach((movel) => {
                movel.posicao.y -=2
              })
        }
     else if(keys.d.pressionado){
        jogador.movimento=true
        jogador.mapa = jogador.sprites.rigth
        for (let i = 0; i < limites.length; i++){
                const Limite = limites [i]
              if(
                    colisaoRetangular({
                   retangulo1: jogador,
                   retangulo2: {...Limite, 
                      posicao: {
                      x: Limite.posicao.x - 2,
                      y:Limite.posicao.y
                   }}       
                   })
                ){
                   console.log('colidindo')
                   movimento = false
                   break
                 }      
             }
             if(movimento)
        moveis.forEach((movel) => {
                movel.posicao.x -=2
              })
        }
}
anima????o()


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



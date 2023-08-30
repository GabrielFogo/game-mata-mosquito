let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 20;
let contador = 0;

let nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'medio'){
  setInterval(() => {
    randomPosition();
  },1800);
}else if(nivel === 'dificil'){
  setInterval(() => {
    randomPosition();
  },1000);
}else if(nivel === 'chucknorris'){
  setInterval(() => {
    randomPosition();
  },750);
}

let decrementa = setInterval(() => {
  tempo--; 
  if(tempo<0){
    clearInterval(decrementa)
    window.location.href = 'vitoria.html'
  }else{
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000);

function ajustarPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustarPalco();

// criando o elemento mosquito
function randomPosition() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "fim_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "img/coracao_vazio.png";
      vidas++;
    }
  }
  let positionX = Math.floor(Math.random() * largura) - 200; // vai atribuir a letiavel positionX um valor entre as dimessoes
  let positionY = Math.floor(Math.random() * altura) - 200;

  positionX = positionX < 10 ? 10 : positionX;
  positionY = positionY < 10 ? 10 : positionY;

  let mosquito = document.createElement("img");

  mosquito.src = "img/mosquito.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.id = "mosquito";
  //vai remover o mosquito
  mosquito.onclick = function () {
    this.remove();
    contador++;
    document.getElementById('contador').innerHTML = `Mosquitos mortos:${contador}`
  };

  document.body.appendChild(mosquito);
}
// ramdomiza os tamanhos do mosquito
function randomSize() {
  let className = Math.floor(Math.random() * 3);

  switch (className) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

//cria o lado a e b
function randomSide() {
  let className = Math.floor(Math.random() * 2);

  switch (className) {
    case 0:
      return "side1";
    case 1:
      return "side2";
  }
}

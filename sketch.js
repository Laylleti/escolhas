let suaidade;
let agua;
let suco;
let alcool;
let titulo;
let corpo;
let bebidas = {
  menor10:{
    agua:"potavel",
    suco:"laranja ",
    alcool:"nao indicado vo contar pra sua mae "
  },
  entre10e14:{
    agua:"corrente da torneira",
    suco:"morango",
    alcool:"nao indicado tem nem idade e quer beber "
  },
  entre14e16:{
    agua:"agua beba agua",
    suco:"abacaxi pra fazer xixi",
    alcool:"licor vai estudar alcool nao da futuro"
  },
  entre16e18:{
    agua:"agua com limao",
    suco:"limao mas azedo que sua vida so limao",
    alcool:"conhaque sai dessa vida  "
  },
  maior18:{
    agua:"agual com gas",
    suco:"maracuja para desestresar",
    alcool:"gim"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade").position(670,530).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
 agua = createCheckbox("Gosta de agua").position(100,600).addClass("hidden");
 suco = createCheckbox("Gosta de suco").position(100,650).addClass("hidden");
 alcool= createCheckbox("Gosta de bebidas alcoolicas").position(100,700).addClass("hidden");
 titulo="Dancing Script";
  corpo = "Poppins";
  button = createButton("escolhe logo").position(width/2,500);
  button.mousePressed(bota);
  button.addClass("botao");
}
function bota(){
  selectAll('.hidden').forEach((el)=>
el.removeClass('hidden'));
  button.hide();
  
}

function draw() {
  background("pink");
  
  let idade = parseInt(suaidade.value());
  let checkagua = agua.checked();
   let checksuco = suco.checked();
   let checkalcool = alcool.checked();
  let bebida = "escolha sua bebida";
  if (suaidade.value() !==""){
  bebida =mostrabebida(idade, checkagua, checksuco, checkalcool);
  }
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(bebida,width/2,height/2);
  textFont(titulo);
   fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("melhores escolhas para bebida",width/2,30);
  textFont(corpo);
}

function mostrabebida(idade, checkagua, checksuco, checkalcool){
  if(isNaN(idade)){
  return"Idade Invalida";
  }else
    if(idade< 5){
  return"ta achando que tem 18 anos bobinha";
   }else
    if (idade > 120){
      return"ja morreu,sai fora defunto";
     }
  if(idade >= 5 && idade <10){
    if(checkagua){
      return bebidas["menor10"]["agua"];
    }
    if(checksuco){
      return bebidas["menor10"]["suco"];
    }
    if(checkalcool){
      return bebidas["menor10"]["alcool"];
    }
  }
  else if(idade >= 10 && idade <14){
    if(checkagua){
      return bebidas["entre10e14"]["agua"];
    }
    if(checksuco){
      return bebidas["entre10e14"]["suco"];
    }
    if(checkalcool){
      return bebidas["entre10e14"]["alcool"];
     }
   }
   else if(idade >= 16 && idade <18){
    if(checkagua){
      return bebidas["entre16e18"]["agua"];
    }
    if(checksuco){
      return bebidas["entre16e18"]["suco"];
    }
    if(checkalcool){
      return bebidas["entre16e18"]["alcool"];
     }
   }
  else if(idade >= 18){
    if(checkagua){
      return bebidas["maior18"]["agua"];
    }
    if(checksuco){
      return bebidas["maior18"]["suco"];
    }
    if(checkalcool){
      return bebidas["maior18"]["alcool"];
     }
   }
}
   
  

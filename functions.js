window.addEventListener('load', calc, false);
var operando1 = undefined;
var operando2 = undefined;
var finoperacion = false;
var operacion = undefined;
var resultado = 0
function calc (){
  var ceroButton = document.getElementById("0");
  var oneButton = document.getElementById("1");
  var twoButton = document.getElementById("2");
  var threeButton = document.getElementById("3");
  var fourButton = document.getElementById("4");
  var fiveButton = document.getElementById("5");
  var sixButton = document.getElementById("6");
  var sevenButton = document.getElementById("7");
  var eigthButton = document.getElementById("8");
  var nineButton = document.getElementById("9");
  var multButton = document.getElementById("*");
  var divButton = document.getElementById("/");
  var restButton = document.getElementById("-");
  var masButton = document.getElementById("+");
  var calButton = document.getElementById("=");
  var cButton = document.getElementById("C");

  ceroButton.addEventListener('click', buttonpresed, false);
  oneButton.addEventListener('click', buttonpresed, false);
  twoButton.addEventListener('click', buttonpresed, false);
  threeButton.addEventListener('click', buttonpresed, false);
  fourButton.addEventListener('click', buttonpresed, false);
  fiveButton.addEventListener('click', buttonpresed, false);
  sevenButton.addEventListener('click', buttonpresed, false);
  eigthButton.addEventListener('click', buttonpresed, false);
  nineButton.addEventListener('click', buttonpresed, false);
  multButton.addEventListener('click', buttonpresed, false);
  divButton.addEventListener('click', buttonpresed, false);
  restButton.addEventListener('click', buttonpresed, false);
  masButton.addEventListener('click', buttonpresed, false);
  calButton.addEventListener('click', buttonpresed, false);
  cButton.addEventListener('click', buttonpresed, false);


  function buttonpresed(e){

    var button_select = e.target
    var valor = button_select.getAttribute('id');
    var spanResultado = document.getElementById("resultado");
    console.log(valor)

    if(finoperacion){
      spanResultado.innerHTML = "";
      finoperacion=false;
    }
    if(valor=="C"){
      spanResultado.innerHTML = "";
      operando1 =undefined;
      operando2 = undefined;
      resultado=0;
      operacion=undefined;
      return;
    }

    if(valor =="="){
      operando2 = spanResultado.innerHTML;
      if(operacion == "+"){
        resultado =  parseInt(operando1) + parseInt(operando2)
        spanResultado.innerHTML=   parseInt(operando1) + parseInt(operando2)
      }
      if(operacion == "-"){
        resultado =  parseInt(operando1) - parseInt(operando2)
        spanResultado.innerHTML=parseInt(operando1) - parseInt(operando2)
      }
      if(operacion == "/"){
        resultado =  parseInt(operando1) / parseInt(operando2)
        spanResultado.innerHTML=parseInt(operando1) / parseInt(operando2)
      }
      if(operacion == "*"){
        resultado =  parseInt(operando1) * parseInt(operando2)
        spanResultado.innerHTML=parseInt(operando1) * parseInt(operando2)
      }

      console.log(operando1 + operacion + operando2 + resultado)
      operando1 = resultado
      operando2 = undefined
      finoperacion=true;
      return
    }


      if(valor =="+" || valor =="/" || valor =="-" || valor =="*"){
        if(operando1 == undefined){
          operando1 = spanResultado.innerHTML;
        }

        spanResultado.innerHTML = "";
        operacion =valor;
        return
      }



    if(valor != "=" && valor != "+" && valor != "-" && valor != "*" && valor != "/" && valor != "C"){
      spanResultado.innerHTML += valor
    }

  }
}

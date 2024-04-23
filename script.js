
function calcular() {
    let btn = document.getElementById('btn');
    let resposta = document.getElementById('resposta');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    
    console.log(typeof num1, num1, typeof num2, num2, typeof num3, num3);
        
    let media = (num1 + num2 + num3)/3;
    media = media.toFixed(2);
    if(media>=60){
        resposta.innerHTML = "Está APROVADO com a média de "+media+" pontos."; 
    }else{
        resposta.innerHTML = "Está REPROVADO com a média de "+media+" pontos."; 
    }
    
    
};

btn.addEventListener('click', calcular);

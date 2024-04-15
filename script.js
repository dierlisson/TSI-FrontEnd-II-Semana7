
function calcular() {
    let btn = document.getElementById('btn');
    let resposta = document.getElementById('resposta');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    console.log(typeof num1, num1, typeof num2, num2);
        
    let media = (num1 + num2)/2;
    resposta.innerHTML = media; 
    
};

btn.addEventListener('click', calcular);

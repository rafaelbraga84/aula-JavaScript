/*
var nome = "Rafael Braga";
var idade = 30;
var idade2 = 6;
var soma = idade+idade2;

alert("Bem vindo " + nome + ", que tem " + soma + " anos");

// comentario simples

/* comentario
com mais
linhas
*/

// NO 2º ALERTA: somando string = concatenando:

/*
var id = "30";
var id2 = "20";

alert("somando/concatenando strings: id + id2 = " +id+id2);

console.log(nome);
console.log(idade);

var frase = "AAA é melhor";
console.log(frase.replace("AAA", "outracoisa"));
alert(frase.replace("AAA", "B")); 


//console.log(frase.toUpperCase()); ou toLowerCase - CAIXA ALTA ou tudo miniscul

*/

// aula 3: condicionais, est repet. e date

// comando PROMPT: caixa de pergunta
// neste caso esta guardando a resp na var idade
/*  IF / ELSE

var idade = prompt("Qual sua idade? ");

if(idade>18){
    alert("maior de idade!");
}else{
    alert("menor de idade");
}
*/

/* WHILE e FOR

var count = 0;
while(count<=5){
    console.log(count);
    count++;
};

var count;
for(count=0; count<5; count++){
    alert(count);
}
*/

/* DATAS:

var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


// aula4 - funcoes
/*
function soma(n1, n2){
    return n1 +n2;
}

alert(soma(5, 10));

function substituirNome(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(substituirNome("vai japao", "japao", "brasil"));

//var global x local:
var validar = 0;

function validaidade(idade){
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual sua idade?");
validaidade(idade)
console.log(validar);
*/

function clicou(){
    alert("obrigado por clicar");
}

function clicou2(){
    document.getElementById("agradecimento").innerHTML = "obrigado";
}

function redirecionar(){
    window.open("https://goal.com/en");
   // OU window.location.href = "https://goal.com/en";
}

function trocar(elemento){
   // SEM ELEMENTO OU PARAMETRO NA FUNCAO, POREM NAO CHAMA NOVAMENTE SE CRIAR OUTRO PARAGRAFO: document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui novamente";
    elemento.innerHTML = "Passe o mouse aqui novamente";
}
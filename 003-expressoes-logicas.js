//Declarando as variaveis nota e faltas e atribuindo valores as elas.
var nota = 9.0
var faltas = 30

//Operação lógica que verifica se a nota está acima de 7.0
var acima_da_media = nota > 7.0

//Operação lógica que verifica se o número de faltas é menor que 20.
var falta_abaixo_do_limite = faltas < 20

//Operação lógica que verifica se está aprovado. Ou seja, está com a nota acima da média e com menos de 20 faltas.
var aprovado = acima_da_media && falta_abaixo_do_limite

//Imprime na tela os resultados.
console.log("Acima da média: " + acima_da_media)
console.log("Faltas abaixo do limite: " + falta_abaixo_do_limite)
console.log("Aprovado: " + aprovado)

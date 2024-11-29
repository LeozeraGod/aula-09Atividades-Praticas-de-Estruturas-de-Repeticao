//6. Elaborar um programa que apresente os valores de conversão de graus Celsius em graus Fahrenheit,
//de dez em dez graus, iniciando a contagem em dez graus Celsius e finalizando em cem graus Celsius.
//O programa deve apresentar os valores das duas temperaturas. Para converter grau Celsius para Fahrenheit,
//basta multiplicar a temperatura em graus Celsius por 1,8 e somar 32.

let cs = 0;
let ft = 0;

for (let i = 1; i <= 100; i++) {
    if (!(i % 10)) {
        cs = i;
        ft = (cs * 1.8) + 32;
        console.log("Graus Célcius é = " + cs + " graus e Graus Fahrenheit = " + ft);
    }
}
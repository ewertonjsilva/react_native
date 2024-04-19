export default function DefineMensagem (calculo) {
    if (calculo < 18.5) {
        return('Abaixo do peso');
    } 
    if (calculo >= 18.5 && calculo < 25) {
        return('Peso normal');
    } 
    if (calculo >= 25 && calculo < 30) {
        return('Sobrepeso'); 
    } 
    if (calculo >= 30 && calculo < 35) {
        return('Obesidade grau 1'); 
    } 
    if (calculo >= 35 && calculo < 40) {
        return('Obesidade grau 2'); 
    } 
    if (calculo <= 40) {
        return('Obesidade grau 3'); 
    }
}
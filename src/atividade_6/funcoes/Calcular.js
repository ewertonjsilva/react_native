import DefineMensagem from './Mensagem';

export default function Calcular(massa, altura) {
    const valor = massa / (altura * altura);
    const mens = DefineMensagem(valor); 
    return({
        resultado: valor, 
        mensagem: mens
    }); 
} 

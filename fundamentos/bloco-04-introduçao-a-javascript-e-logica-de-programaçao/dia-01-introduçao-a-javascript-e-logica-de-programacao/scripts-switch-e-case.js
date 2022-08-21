var situação = 'aprovada'

switch (situação) {
    case 'aprovada':
        console.log('parabéns!!');
        
        break;

    case 'lista':
        console.log('você está na lista de espera!');

        break;

    case 'reprovada':
        console.log('infelizmente, foi reprovada');

        break;

    default:
        console.log('não se aplica');

        break;
        }
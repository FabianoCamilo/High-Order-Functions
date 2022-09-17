function finalPrice (tax, price) {
    return price * (1 + tax)
}

console.log(finalPrice(0.0875, 25.1))
console.log(finalPrice(0.0875, 21.7))
console.log(finalPrice(0.0875, 107.9))

//Uma tecnica que pode ser aplicada para facilitar
//o codigo é chamada ' de curring';
// Você pode amarzenar uma função como parametro
//dentro de outra função. para ajudar a 
// armazenar o imposto, desta forma, vc apenas 
//informaria o preço no parametro do console log.

function finalPrice (tax) {
    return function(price) {
    return price * (1 + tax)

    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))

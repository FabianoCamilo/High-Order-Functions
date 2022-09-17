// MAP is a function that return the same length of an Array to other array.

const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(el => el * 2)

console.log(numbers, numbersV2)

/* Apenas um exemplo de como você pode fazer a multiplacação do valor usando outra forma, como no exemplo abaixo do loop 'for of'.

const numbersV3 = []
for(let n of numbers) {
    numbersV3.push(n * 2)
}
*/

const students = [
{name: 'Jake', score: 6.4},
{name: 'Susan', score: 8.6},
{name: 'Emma', score: 9.4},
{name: 'Peter', score: 9.1},
]

const getScore = el => el.score

console.log(
    students
    .map(getScore)
    .map(Math.ceil)
    )

    // É possível então usar mais de uma função '.MAP' trasnformando o resultado final ate o desejado como no exemplo acima.
    // Uma outra forma de executar esta operação seria armazenar a função .MAP em outra variável e invoca-la no consolo.log. Veja:

    const result = students
            .map(getScore)
            .map(Math.floor)

    console.log(result)

    //No exemplo acima usei .map.floor arredondando os elementos para baixo.

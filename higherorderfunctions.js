/* Higher Order Function are functions that 
operates on other functions
*/


function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello!')
}

run(sayHello)

function salvation(jes) {
    jes()
}

salvation(function() {
    console.log('My savior Jesus!')
})

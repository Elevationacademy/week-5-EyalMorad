const validator = require('validator')
const faker = require('faker')

/////////////////////////////
//EXERCISE 1
/////////////////////////////
//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)



const result1 = validator.isEmail("shoobert@dylan")
console.log(result1) // prints false



//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const result2 = validator.isMobilePhone("786-329-9958","en-US")
console.log(result2) 



//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

const result3 = validator.blacklist(text, blacklist)
console.log(result3)



/////////////////////////////
//EXERCISE 2
/////////////////////////////
const makeHuman = function(n){
    for(let i=0; i<n; i++){
        console.log(faker.fake("{{name.firstName}},{{image.people}},{{company.companyName}}"))
    }
}

makeHuman(3)


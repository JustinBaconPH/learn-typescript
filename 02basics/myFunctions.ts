function addTwo(num: number): number{
   return num + 2
   //return "Hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("four")
signUpUser("Justin", "justin@gmail.com", false)
loginUser("j", "j@j.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg);
}



export {}
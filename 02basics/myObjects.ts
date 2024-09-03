// const User = {
//     name: "Justin",
//     email: "justin@crimson.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {
// }

// let newUser = {name: "Justin", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return{name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    ccDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "j",
    email: "j@j.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {cvv: number}

myUser.email = "j@gmail.com"
// myUser._id = "hotdog"

export {}
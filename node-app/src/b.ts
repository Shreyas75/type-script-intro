function isLegally(user: User): boolean {
    if(user.age > 18){
        return true;
    }
    return false;
}


interface User {
    firstName:String;
    lastName: String;
    email?: String;
    age: number;
}


function greeting(user: User) {
    console.log("hi there " + user.firstName)
}

greeting({
    firstName: "tushar",
    lastName: "mittal",
    age: 12
})

console.log(isLegally({
    firstName: "Shreyas",
    lastName: "Manoti",
    age: 12
}))

console.log()
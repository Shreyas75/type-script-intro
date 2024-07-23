

function greet(firstName: string){
    console.log("Hello " + firstName);
}

function sum(a: number, b: number): number {
   return (a+b) ;
}

function isLegal(age: number): boolean {
    if(age > 18){
        return true;
    }
    return false;
}

function runFunction(fn: () => void){
    setTimeout(fn, 1000);
}

greet("Shreyas")


console.log(sum(1,2));

let x = isLegal(12)
console.log(x)

const greets = (name) => `Hello, ${name}!`;
//broobrobr
runFunction(() => {
    console.log("from inside the function call. everything working just fine")
})
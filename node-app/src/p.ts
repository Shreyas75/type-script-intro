interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let e = new Employee("Shreyas", 22);
console.log(e);
console.log(e.name);
console.log(e.age);
console.log(e.greet("hey there"));



interface Userint {
	firstyName: string;
	lastyName: string;
	age: number;
}

type NumberArr = number[];

function filteredUsers(user: Userint[]) {
    return user.filter(x => x.age >= 18)
}

console.log(filteredUsers([{
    firstyName: "harkirat",
    lastyName: "Singh",
    age: 21
}, {
    firstyName: "Raman",
    lastyName: "Singh",
    age: 16
}, ]));
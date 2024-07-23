// Difference between interface and type
 
type Employeee = {
    name: string;
    startDate:  Date;
}

type Manager = {
    name: string;
    department: string;
}

//both of these are same

type TechLead = Employeee & Manager;
type techieLead = {
    name: string;
    startDate: Date;
    department: string;
}
// above two things are the same.

const t: TechLead = {
    name: "Shreyas",
    startDate: new Date(),
    department: "account"
}
const Status = ( isSuccess:boolean ):string => isSuccess ? "Take a Break" : "Coding More..." 


interface Iperson {
  Status( isSuccess: boolean ): string
}

class Person implements Iperson{
    Status = ( isSuccess:boolean ):string => isSuccess ? "Take a Break" : "Coding More..." 
}

const person = new Person
console.log(person.Status(false))


console.log(Status(false))
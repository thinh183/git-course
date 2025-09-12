1
class Customer {
    name: string;
    id: number;
    email: string;
    phone: number;
    constructor(name: string, id: number, email: string, phone: number) {
        this.name = name
        this.id = id
        this.email = email
        this.phone = phone;

    }
    displayInfo() {
        console.log(`id:${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`email: ${this.email}`);
        console.log(`phone: ${this.phone}`)

    }
    updateEmail(Newemail: string) {
        Newemail = this.email;
        console.log(`update email: ${Newemail}`);
    }




}


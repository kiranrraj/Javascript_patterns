class CreateUser {
    constructor( first_name, middle_name, last_name, email ) {
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.email = email;
    }
}

const printDetails = {
    printFullName: function() {
        console.log( `
        First Name: ${ this.first_name },
        Last Name: ${ this.last_name },
        Middle Name: ${ this.middle_name } 
        `)
    }
}

const createUserMethods = {
    printName: function() {
        console.log( `User Name: ${this.first_name} ${this.last_name}` )
    },
    printEmail: function() { 
        console.log( `User Email: ${this.email}`)
    },
    printFullName () {
        super.printFullName();
    }
};

Object.assign( createUserMethods, printDetails );
Object.assign( CreateUser.prototype, createUserMethods );

const admin = new CreateUser( 'Kiran', 'raj', 'r', 'krr@gmail.com');
admin.printEmail();
admin.printFullName();

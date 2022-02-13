class CreateUser {
    constructor( first_name, middle_name, last_name, email ){
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.email = email;
    }

    printFullName() {
        console.log( `
        First Name: ${ this.first_name },
        Last Name: ${ this.last_name },
        Middle Name: ${ this.middle_name } 
        `)
    }
}

const admin = new CreateUser( 'Kiran', 'raj', 'r', 'krr@gmail.com' );

admin.printFullName();
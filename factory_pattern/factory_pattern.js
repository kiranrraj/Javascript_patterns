const createUser = ( {first_name, last_name, middle_name,email} ) => ({
    first_name,
    middle_name,
    last_name,
    email,
    printFullName() {
        console.log( `
        First Name: ${ this.first_name },
        Last Name: ${ this.last_name },
        Middle Name: ${ this.middle_name } 
        `)
    }
});

const admin = createUser( {
    first_name: 'Kiran', 
    last_name: 'raj', 
    middle_name: 'r', 
    email: 'krr@gmail.com'
} );

admin.printFullName();
admin.first_name = "Manu";
admin.printFullName();
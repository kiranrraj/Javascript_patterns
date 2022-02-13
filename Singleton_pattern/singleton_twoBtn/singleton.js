// Singletons are classes that can be instantiated once, 
// which can be accessed globally.


let instance,
    value = 0;

class Singleton {

    constructor() {
        if ( instance ) throw new Error ( 'An instance of singleton already exists' );
    }

    getInstance () { return this };

    getValue () { return value };

    incrementValue () { return value++ }
    
    decrementValue() { return value-- }
}

const valueSingleton = Object.freeze( new Singleton() );

export default valueSingleton;

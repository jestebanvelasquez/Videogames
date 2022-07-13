export function validate (input) {
    let errors = {}
    if(!input.username) {
        errors.username = 'username is required';
        
    }else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
        errors.username = 'username is invalid';
     }

    // if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
    //     errors.username = 'username is invalid';
    // }
    return errors;
}
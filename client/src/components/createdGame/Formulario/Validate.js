export const Validate = (state) => {
    console.log(state)
    let errors = {};

    //------------------------ ValidacionName: --------------------

        if(!state.name){
            errors.name = 'name is required'
        }else  if(/^[0-9]+$/.test(state.name)){
        errors.name = ' name no debe ser un numero'
    }
    
    //------------------------ ValidacionDescription: --------------------
    
    if(!state.description){
        errors.description = 'description is required'
    }

    //------------------------ ValidacionReleased: --------------------
    
    if(!state.released){
        errors.released = 'released is required'
    }

    //------------------------ ValidacionRating: --------------------
    
    if(!state.rating){
        errors.rating = 'rating is required'
    }else if(state.rating > 5  || state.rating < 0){
        errors.rating = 'el rating debe ser un numero entre 0 y 5'
    }else if(!/^[0-9]+$/.test(state.rating)){
            errors.rating = 'rating no debe ser de tipo string'
    }
    return errors;
}
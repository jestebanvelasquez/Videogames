export const Validate = (state) => {
    console.log(state)
    let errors = {};

    //------------------------ ValidacionName: --------------------

    if (!state.name) {
        errors.name = 'name is required'
    } else if (/^[0-9]+$/.test(state.name)) {
        errors.name = ' name no debe ser un numero'
    }

    //------------------------ ValidacionImage: --------------------

    if (state.image === '/static/media/image1.322da084.png' || !state.image.length) {
        errors.image = 'image is required'

    }

    //------------------------ ValidacionDescription: --------------------

    if (!state.description) {
        errors.description = 'description is required'
    }

    //------------------------ ValidacionReleased: --------------------

    if (!state.released.length) {
        errors.released = 'released is required'
    }

    //------------------------ ValidacionRating: --------------------

    if (state.rating <= 0) {
        errors.rating = 'rating is required'
    }

    //------------------------ ValidacionPlatforms: --------------------

    if (state.platforms.length <= 0) {
        errors.platforms = 'platforms is required'
    }

    //------------------------ ValidacionGenres: --------------------

    if (state.genres.length <= 0) {
        errors.genres = 'genres is required'
    }



    return errors;
}
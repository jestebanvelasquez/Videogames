export const Validate = (input) => {
    console.log(input)
    let errors = {};

    //------------------------ ValidacionName: --------------------

    if (!input.name) {
        errors.name = 'name is required'
    } else if (/^[0-9]+$/.test(input.name)) {
        errors.name = ' name no debe ser un numero'
    }

    //------------------------ ValidacionImage: --------------------

    if (input.image === '/static/media/image1.322da084.png' || !input.image) {
        errors.image = 'image is required'

    }

    //------------------------ ValidacionDescription: --------------------

    if (!input.description) {
        errors.description = 'description is required'
    }

    //------------------------ ValidacionReleased: --------------------

    if (!input.released) {
        errors.released = 'released is required'
    }

    //------------------------ ValidacionRating: --------------------

    if (!input.rating === 0) {
        errors.rating = 'rating is required'
    }

    //------------------------ ValidacionPlatforms: --------------------

    if (!input.platforms.length ) {
        errors.platforms = 'platforms is required'
    }

    //------------------------ ValidacionGenres: --------------------

    if (!input.genres.length ) {
        errors.genres = 'genres is required'
    }



    return errors;
}
import {
    GET_VIDEO_GAMES,
    GET_GENRES,
    GET_BY_NAME,
    GET_PLATFORMS,
    GET_BY_ID,
    BY_FILTER,
    BY_GENRE
} from './action-types'

export const getAllGames = () => dispatch =>{
    
    return fetch('http://localhost:3002/videogames')
                .then(r => r.json())
                .then(json =>{
                    dispatch({
                        type:GET_VIDEO_GAMES,
                        payload:json.data
                    })
                })
}

export const getAllGenres = () => dispatch =>{
    
    return fetch('http://localhost:3002/genres')
                .then(r => r.json())
                .then(json =>{
                    dispatch({
                        type:  GET_GENRES,
                        payload:json.data
                    })
                })
}

export const getByName = (name) => dispatch =>{
    
    return fetch(`http://localhost:3002/videogames/name?name=${name}`)
                .then(r => r.json())
                .then(json =>{
                    dispatch({
                        type:  GET_BY_NAME,
                        payload:json.data
                    })
                })
}

export const getAllPlatforms = () => dispatch => {
    return fetch('http://localhost:3002/platforms')
                .then(r => r.json())
                .then(json => {
                    dispatch({
                        type: GET_PLATFORMS,
                        payload: json.data
                    })
                })
}


export const byFilter = (payload) => dispatch =>{
    // return {
        dispatch({
            type: BY_FILTER,
            payload: payload
        })
    // }
}

export const byGenre = (payload) => dispatch =>{
    // return {
        dispatch({
            type: BY_GENRE,
            payload: payload
        })
    // }
}





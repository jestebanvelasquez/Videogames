import {
    GET_GENRES,
    GET_VIDEO_GAMES,
    GET_BY_NAME,
    GET_PLATFORMS,
    BY_FILTER,
    BY_GENRE
} from '../actions/action-types'


const initialState = {
    allGames : [],
    filterby: [],
    allGenres:[],
    allPlatforms:[],
    byName:[],
    byId:{},

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_GAMES:
            return {
                ...state,
                allGames: action.payload,
                filterby: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                byName: action.payload
            }
        case GET_PLATFORMS:
            return{
                ...state,
                allPlatforms: action.payload
            }
        case BY_FILTER:
            switch (action.payload) {
                case 'all':
                    const allGames = state.filterby;
                    return{
                        ...state,
                        allGames: allGames
                    }   
                case 'byAZ':
                    const filterbyAZ = state.filterby
                    const statusFilterbyAZ = [...filterbyAZ].sort((a,b) =>{
                        if(a.name > b.name) {
                            return 1;
                        }else if(a.name < b.name){
                            return -1;
                        }else return 0;
                    })
                    console.log(statusFilterbyAZ);
                    return {
                        ...state,
                        allGames:statusFilterbyAZ
                    }
                case 'byZA':
                    const filterbyZA = state.filterby
                    const statusFilterbyZA = [...filterbyZA].sort((a,b) =>{
                        if(a.name < b.name) {
                            return 1;
                        }else if(a.name > b.name){
                            return -1;
                        }else return 0;
                    })
                    console.log(statusFilterbyZA);
                    return {
                        ...state,
                        allGames:statusFilterbyZA
                    }
                case 'byRAsc':
                    const filterbyRAsc = state.filterby
                    const statusFilterbyRAsc = [...filterbyRAsc].sort((a,b) =>{return b.rating - a.rating;})
                    return {
                        ...state,
                        allGames: statusFilterbyRAsc
                    }
                case 'byRDes':
                    const filterbyRDes = state.filterby
                    const statusFilterbyRDes = [...filterbyRDes].sort((a,b) =>{return  a.rating - b.rating ;})
                    return {
                        ...state,
                        allGames: statusFilterbyRDes
                    }

                default:
                    return{
                        ...state
                    };
            }
        case BY_GENRE:
            let byGenres = state.filterby
            let genreByName = byGenres.filter( g => g.Genres ? g.Genres.includes(`${action.payload}`): null)
            console.log(genreByName);
            return {
                ...state,
                allGames: genreByName
            }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;






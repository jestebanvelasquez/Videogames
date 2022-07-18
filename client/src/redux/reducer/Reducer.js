import {
    GET_GENRES,
    GET_VIDEO_GAMES,
    GET_BY_NAME,
    GET_PLATFORMS,
    GET_BY_ID,
    GET_DATA_BASE,
    DELETE_GAME_DB,

    BY_FILTER,
    BY_GENRE,
    BY_ALL_PLATF,
    DELETE_GAME_API
} from '../actions/action-types'


const initialState = {
    allGames: [],
    filterby: [],
    allGenres: [],
    allPlatforms: [],
    byDataBase: [],
    byName: [],
    byPlatf: [],
    byId: {},

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_GAMES:
            let platforms = action.payload
            platforms = platforms.map(el => el.platforms).flat()
            platforms = [...new Set(platforms.sort())]
            platforms = platforms.map(el => { return { name: el } })
            return {
                ...state,
                allGames: action.payload,
                filterby: action.payload,
                byPlatf: platforms
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
            return {
                ...state,
                allPlatforms: action.payload,
            }
        case GET_BY_ID:
            return {
                ...state,
                byId: action.payload
            }
        case GET_DATA_BASE:
            return {
                ...state,
                byDataBase: action.payload
            }
        case DELETE_GAME_DB:
            return {
                ...state,
                byDataBase: action.payload
            }

            /// ---------------------------------------- local Reducers -----------------------------------------------------------------///

        case BY_FILTER:
            switch (action.payload) {
                case 'all':
                    const allGames = state.filterby;
                    return {
                        ...state,
                        allGames: allGames
                    }
                case 'byAZ':
                    const filterbyAZ = state.filterby
                    const statusFilterbyAZ = [...filterbyAZ].sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        } else if (a.name < b.name) {
                            return -1;
                        } else return 0;
                    })
                    return {
                        ...state,
                        allGames: statusFilterbyAZ
                    }
                case 'byZA':
                    const filterbyZA = state.filterby
                    const statusFilterbyZA = [...filterbyZA].sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        } else if (a.name > b.name) {
                            return -1;
                        } else return 0;
                    })
                    return {
                        ...state,
                        allGames: statusFilterbyZA
                    }
                case 'byRAsc':
                    const filterbyRAsc = state.filterby
                    const statusFilterbyRAsc = [...filterbyRAsc].sort((a, b) => { return b.rating - a.rating; })
                    return {
                        ...state,
                        allGames: statusFilterbyRAsc
                    }
                case 'byRDes':
                    const filterbyRDes = state.filterby
                    const statusFilterbyRDes = [...filterbyRDes].sort((a, b) => { return a.rating - b.rating; })
                    return {
                        ...state,
                        allGames: statusFilterbyRDes
                    }
                case 'byDb':
                    const filterbyDb = state.filterby
                    const allDbFilters = [...filterbyDb].filter((el) => el.createDB)
                    return {
                        ...state,
                        allGames: allDbFilters
                    }
                case 'byapi':
                    const filterbyapi = state.filterby
                    const allApiFilters = [...filterbyapi].filter((el) => !el.createDB)
                    return {
                        ...state,
                        allGames: allApiFilters
                    }

                default:
                    return {
                        ...state
                    };
            }
        case BY_GENRE:
            let byGenres = state.filterby
            let genreByName = byGenres.filter(g => g.genres ? g.genres.includes(`${action.payload}`) : null)
            return {
                ...state,
                allGames: genreByName
            }
        case BY_ALL_PLATF:
            const byPlatf = state.allGames // traer allplatforms

            return {
                ...state,
                byPlatf: byPlatf
            }
        case DELETE_GAME_API:
            return {
                ...state,
                allGames: state.allGames.filter(el => el.id !== action.payload)
            }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;
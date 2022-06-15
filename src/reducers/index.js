import { ADDFAVORITE ,GETDETAILS,GETMOVIES,REMOVEFAVORITE } from "../actions"


const initialState ={
    favoriteMovies: [],
    loadedMovies: [],
    detailMovie: {}
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADDFAVORITE:
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.concat(action.payload)
            }
        case REMOVEFAVORITE:
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.filter((movie)=> movie.id !== action.payload)
            }
        case GETMOVIES:
            return{
                ...state,
                loadedMovies: action.payload
            }
        case GETDETAILS:
            return{
                ...state,
                detailMovie: action.payload
            }
        default:
            return state;
            
    }
}  

export default rootReducer; 

export const ADDFAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVEFAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GETMOVIES = "GET_MOVIES";
export const GETDETAILS = "GET_DETAILS";

const API_KEY= process.env.REACT_APP_MOVIE_API_KEY

export function addMovieFavorite(payload){
    return{
        type:ADDFAVORITE, payload
    };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + titulo)
        .then(r => r.json())
        .then(json => {
            //console.log(json) me trae las props que del llamado a la api con la s 
            dispatch({type:GETMOVIES, payload: json.Search})
        })
    }
}

export function removeMovieFavorite(payload){
    return{
        type: REMOVEFAVORITE, payload 
    };
}

export function getDetails(id) {
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=` + id)
        .then(r => r.json())
        .then(json => {
            //console.log(json) me trae las props del llamado a la api con la i 
            dispatch({type: GETDETAILS, payload: json})
        })
    }
}

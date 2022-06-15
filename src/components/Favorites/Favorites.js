import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {removeMovieFavorite,getMovies} from "../../actions"
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    console.log(props) //props que viene del connect
  }
  
  render() {
    return (
      <div>
        <h2 className="estilo">Favorites☻</h2>
        <div className="display1" >
          {this.props.movies.map((movie)=>{
            return(
              <div classname="margin2"  key={movie.id}>
                <Link to={`/movie/${movie.id}`}><img className="display h-90 p-2 bg-dark" src={movie.poster}/></Link>
                <button className="btn btn-danger" onClick={() => this.props.removeMovieFavorite(movie.id)}>
                  Remove
                </button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.favoriteMovies
  }
}


export default connect(mapStateToProps, {removeMovieFavorite, getMovies })(ConnectedList);
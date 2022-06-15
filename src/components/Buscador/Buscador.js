import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from "../../actions"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    console.log(props) //props que viene del connect
   
    this.state = {
      title: "",
    };
  }
  
  handleChange(event) {
    this.setState({ title: event.target.value });
    
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
  

  render() {
    const { title } = this.state;
    return (
    <div>
      <div className="container-sm">
        <form className="d-flex margin" onSubmit={(e) => this.handleSubmit(e)}>
        <input
            className="size"
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => this.handleChange(e)}
            placeholder="Movies.."
        />
        <label for="floatingInput" id="floatingInput" htmlFor="title"> </label>
        <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
      <br />
      <div className="display1">
      {this.props.movies ? this.props.movies.map((movie)=> {
        return(
          <div className="margin2" key={movie.imdbID}>
            <Link className="" to={`/movie/${movie.imdbID}`}><img className=" display h-90 p-2 bg-dark" src={movie.Poster}/></Link>
            <button className="btn btn-danger" onClick={() =>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})}>
            Add to favorite ♥
            </button>
          </div>
        )
      }): (<div className="container">
        Ups!! No movies found...
      </div> )} 
      </div>
    </div>
    );
  }
}

function mapStateProps(state){
  return{
    movies: state.loadedMovies
  };
}



export default connect(mapStateProps,{addMovieFavorite, getMovies})(Buscador);
import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }


    render() {
        return (
        <div className='container-md '> 
            <div className="h-80 p-4 text-white bg-dark bg-opacity-75 "> 
                <div className='header'>
                    <h2>{`${this.props.movies.Title}`}</h2>
                    <img className='display h-90 p-1 ' src={this.props.movies.Poster} alt="Img not found"/>
                </div>
                <div className='margin'>
                    <h4>{`Year: ${this.props.movies.Year}`}</h4>
                    <h4>{`Duration: ${this.props.movies.Runtime}`}</h4>
                    <h4>{`Cast: ${this.props.movies.Actors}`}</h4>
                    <h4>{`Director: ${this.props.movies.Director}`}</h4>
                </div>
            </div>
        </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        movies: state.detailMovie
    }
}
function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
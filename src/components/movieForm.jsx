import React, { Component } from 'react';
 
class MovieForm extends Component { 
    handleSave = () =>{
        this.props.history.push('/')   
    }
    render() { 
         return (
            <div>
            <h1>Movie Form {this.props.match.params.id}</h1>
            <button type="button" className="btn btn-secondary m-4" onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}
 
export default MovieForm;
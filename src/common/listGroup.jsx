import React, { Component } from 'react';
import {getGenres } from '../services/fakeGenreService';

class ListGroup extends Component {
    state = {
        genre: getGenres()
    }
    
    render() {
        return (
            <ul className="list-group">
                {this.state.genre.map(g => (
                    <a key={g.name} className={this.props.currentTab===g.name?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"} onClick={()=>this.props.onTabChange(g.name)}>{g.name}</a>
                ))}
            </ul>
        );
    }
}

export default ListGroup;
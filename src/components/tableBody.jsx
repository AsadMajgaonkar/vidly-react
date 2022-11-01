import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class TableBody extends Component {
    
    render() {
        const { movies, onDelete } = this.props;
        return (
            <tbody>
                {movies.map(movie => (
                    
                    <tr key={movie.title}>
                        <td className='col-4'><Link to={`movies/${movie._id}`}>{movie.title}</Link></td>
                        <td className='col-2'>{movie.genre.name}</td>
                        <td className='col-2'>{movie.numberInStock}</td>
                        <td className='col-2'>{movie.dailyRentalRate}</td>
                        <td><button type="button" className="btn btn-sm btn-outline-danger my-2" onClick={() => onDelete(movie._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;
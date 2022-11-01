import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../common/paginate';
import Paging from '../common/paging';
import PropTypes from 'prop-types';
import ListGroup from '../common/listGroup';
import { genres } from '../services/fakeGenreService';
import { filter } from '../common/filter';
import _ from 'lodash';

class Elements extends Component {
    state = {
        movie: getMovies(),
        pageSize: 4,
        currentPage: 1,
        currentTab: genres[0].name,
        sortColumn:{path:"title",order:"asc"}
    }

    handleDelete = (id) => {
        const movies = this.state.movie.filter(c => c._id !== id);
        this.setState({ movie: movies })
    }

    handleCount() {
        let count = 0;
        this.state.movie.map(c => count += 1)
        return count
    }

    handleWarning() {
        if (this.handleCount() === 0)
            return <p>No movies to show!</p>
        else
            return <p>Showing {this.handleCount()} movies in the database</p>
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleTab = (genre) => {
        this.setState({ currentTab: genre }) //to highlight current tab
        const movies = getMovies();
        this.setState({
            movie: filter(movies, genre),
            currentPage: 1
        })
    }

    handleSort = (sortColumn) => 
        this.setState({sortColumn:sortColumn})

    getPageData=()=>{
        const sorted = _.orderBy(this.state.movie,this.state.sortColumn.path,this.state.sortColumn.order)
        const movies = paginate(sorted, this.state.currentPage, this.state.pageSize);
        return {movies:movies}
    }    

    render() {
        const pageData = this.getPageData();
        return (
            <div className='container d-flex m-4'>
                <div className='col-2 m-4'>
                    <ListGroup currentTab={this.state.currentTab}
                        onTabChange={this.handleTab} />
                </div>

                <div className='container m-4'>
                    {this.handleWarning()}

                    <MoviesTable movies={pageData.movies} 
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={this.state.sortColumn} />

                    <Paging itemsCount={this.state.movie.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }
}

Paging.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Elements;
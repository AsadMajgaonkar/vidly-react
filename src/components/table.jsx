import React, { Component } from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'

class Table extends Component {
    
    render() { 
        return (
            <table className='container'>
                <TableHeader column={this.props.column}
                    sortColumn={this.props.sortColumn}
                    onSort={this.props.onSort} />

                <TableBody movies={this.props.movies}
                    onDelete={this.props.onDelete} />
            </table>
        );
    }
}
 
export default Table;
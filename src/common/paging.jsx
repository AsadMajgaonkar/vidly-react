import React, { Component } from 'react'

class Paging extends Component {

    Range(start, end) {
        let value = start;
        let length = end - start;
        let arr = new Array(length);
        for (let i = 0; i < length; i++) {
            arr[i] = value;
            value++;
        }
        return arr;
    }

    render() {
        const pageCount = Math.ceil(this.props.itemsCount / this.props.pageSize);
        let pages = this.Range(1, pageCount + 1);

        if (pageCount === 1)
            return null;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page} className={this.props.currentPage===page?"page-item active":"page-item"}>
                            <a className="page-link" onClick={()=>this.props.onPageChange(page)}>{page}</a>
                            </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Paging;
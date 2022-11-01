import React, { Component } from 'react'

class TableHeader extends Component {
    raiseSort=(path)=>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path==path){
            sortColumn.order = sortColumn.order=='asc'?'desc':'asc'
        }
        else{
            sortColumn.path=path
            sortColumn.order='asc'
        }
        this.props.onSort(sortColumn);
    }

    renderSort = (column) =>{
        const {sortColumn} = this.props;
        
        if(column.path!==sortColumn.path)
            return null
        if(sortColumn.order==='asc'){
            return <i className="fa-solid fa-sort-up"></i>
        }    
        return <i className="fa-solid fa-sort-down"></i>
    }

    render() { 
        return (
            <thead>
                <tr>
                    {this.props.column.map(column=>
                        <th key={column.label} className="Clickable" onClick={()=>this.raiseSort(column.path)} >{column.label}{this.renderSort(column)}</th>)}
                </tr>
            </thead>        
        );
    }
}
 
export default TableHeader;
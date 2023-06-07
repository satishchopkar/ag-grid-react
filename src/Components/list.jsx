import { AgGridReact } from "@ag-grid-community/react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './list.css';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
ModuleRegistry.registerModules([ ClientSideRowModelModule ]);

const List = () => {
    const [rowData, setRowData] = useState([]);
    // const [columnDefs] = useState([])
    const defaultColDefs = {
        sortable: true,
        editable: true,
    }
    const onCellValueChanged = (e) => {
        console.log('>>onCellValueChanged:',   e.oldValue, e.newValue);
    }
    const gridOptions = {
        rowDragManaged: true,
        animteRows: true,
        suppressRowTransform: true,
        columnDefs: [
            { field: 'make', },
            { field: 'model', rowDrag: true,  },
            { field: 'price', rowSpan: params => params.data.price === 72000 ? 2 : 1 }
        ],
        pinnedTopRowData: [            {make: "Porsche3", model: "Boxster3", price: 720002},
        {make: "Porsche4", model: "Boxster4", price: 720003},],
        pinnedBottomRowData: [            {make: "Porsche3", model: "Boxster3", price: 720002},
        {make: "Porsche4", model: "Boxster4", price: 720003},],
        onCellValueChanged: onCellValueChanged,
    }


    
    

    useEffect(() => {
        setRowData([
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxster", price: 72000},
            {make: "Porsche1", model: "Boxster1", price: 72000},
            {make: "Porsche2", model: "Boxster2", price: 720001},
            {make: "Porsche3", model: "Boxster3", price: 720002},
            {make: "Porsche4", model: "Boxster4", price: 720003},
            {make: "Porsche5", model: "Boxster5", price: 720004},
        ])
    },[])

    return (
        <div className="grid">
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            AG GRID
            <AgGridReact
                rowData={rowData}
                // columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                gridOptions={gridOptions}
                >
            </AgGridReact>
        </div>
        </div>
    );
}

export default List;
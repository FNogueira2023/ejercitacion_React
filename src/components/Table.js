import React from "react";
import Row from "./Row";
import '../assets/css/table.css'

const tableRows = [
    { cell1: 'Título', cell2: 'Duración', cell3: 'Rating', cell4: 'Genero', cell5: 'Premios' },

    { cell1: 'Billy Elliot', cell2: 123, cell3: 5, cell4: ['Acción', ' Drama'], cell5: 2 },

    { cell1: 'Alicia en el país de las maravillas', cell2: 142, cell3: 4.8, cell4: 'Acción', cell5: 3 },

    { cell1: 'Título', cell2: 'Duración', cell3: 'Rating', cell4: 'Genero', cell5: 'Premios' }
]


function Table() {
    return (
        <React.Fragment>
            <table className="table">
                <tbody>
                    {tableRows.map((rows, i) => <Row {...rows} key={i} />)}
                </tbody>
            </table>

        </React.Fragment >
    )
}

export default Table;
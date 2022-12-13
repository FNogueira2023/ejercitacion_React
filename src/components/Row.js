import React from "react";
import '../assets/css/table.css';

function Row(props) {
    return(
        <React.Fragment>
            <tr>
                <td>{props.cell1}</td>
                <td>{props.cell2}</td>
                <td>{props.cell3}</td>
                <td>{props.cell4}</td>
                <td>{props.cell5}</td>
            </tr>
        </React.Fragment>
    )
}

export default Row;
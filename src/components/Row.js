import React from "react";
import '../assets/css/table.css';
import PropTypes from 'prop-types';

function Row(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.rating}</td>
                <td>{props.awards}</td>
                <td>{props.length}</td>
            </tr>
        </React.Fragment>
    )
}

Row.defaultProps = {
    cell1: "Sin información",
    cell2: "Sin información",
    cell3: "Sin información",
    cell4: "Sin información",
    cell5: "Sin información",

}


Row.propTypes = {
    cell1: PropTypes.string,
    cell2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    cell3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    cell4: PropTypes.string,
    cell5: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Row;
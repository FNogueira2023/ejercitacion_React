import React from "react";
import PropTypes from 'prop-types';

function RowMovie(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold " + props.borderColor + " text-uppercase mb-1"}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cipher}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RowMovie.defaultProps = {
    title: "Datos",
    borderColor: "blue",
    cipher: 0,
    icon: "none"
}


RowMovie.propTypes = {
    titulo: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    cipher:
        PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ]),
    icon: PropTypes.string.isRequired,
};



export default RowMovie;
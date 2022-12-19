import React, { Component } from "react";
import Row from "./Row";
import '../assets/css/table.css'



class Table extends Component {
    constructor() {
        super()
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/movies')
            .then((respuesta) => respuesta.json())
            .then((movies) => {
                this.setState({ movieList: movies.data });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Calificación</th>
                            <th>Premios</th>
                            <th>Duración</th>
                        </tr>

                        {this.state.movieList.map((rows, i) => <Row {...rows} key={i} />)}
                    </tbody>
                </table>

            </React.Fragment >
        )
    }

}

export default Table;
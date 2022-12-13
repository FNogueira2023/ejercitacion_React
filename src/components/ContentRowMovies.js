import React from "react";
import RowMovie from "./RowMovie";


let properties = [{ title: "MOVIES IN DATA BASE", cipher: 21, borderColor: "primary", icon: "fas fa-film fa-2x text-gray-300" },
{ title: "TOTAL AWARDS", cipher: 79, borderColor: "success", icon: "fas fa-award fa-2x text-gray-300" },
{ title: "ACTORS QUANTITY", cipher: 49, borderColor: "warning", icon: "fas fa-user fa-2x text-gray-300" }];


function ContentRowMovies(props) {
    return (
        <React.Fragment>
            {properties.map((properties, i) => <RowMovie {...properties} key={i}/>)}

        </React.Fragment>

    )
}

export default ContentRowMovies;
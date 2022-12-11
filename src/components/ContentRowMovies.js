import React from "react";
import RowMovie from "./RowMovie";


let properties = [{ title: "MOVIES IN DATA BASE", cipher: 21, borderColor: "text-primary", icon: "fas fa-film fa-2x text-gray-300" },
{ title: "TOTAL AWARDS", cipher: 79, borderColor: "text-success", icon: "fas fa-award fa-2x text-gray-300" },
{ title: "ACTORS QUANTITY", cipher: 49, borderColor: "text-warning", icon: "fas fa-user fa-2x text-gray-300" }];


function ContentRowMovies(props) {
    return (
        <React.Fragment>
            {properties.map(properties => <RowMovie title={properties.title} cipher={properties.cipher}
                borderColor={properties.borderColor} icon={properties.icon} />)}

        </React.Fragment>

    )
}

export default ContentRowMovies;
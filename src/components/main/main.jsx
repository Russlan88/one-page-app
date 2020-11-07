import React from 'react';

const CreateElement = () => {

    return (

        React.createElement(
            "div",
            { className: "hexagon" }
        )

    )
}

const MultElement = () => {
    let exgElements = []
    for (let i = 0; i <= 20; i++) {

        exgElements.push(<CreateElement />)
    }

    return <div className="row">{exgElements}</div>;
}

// const MultRow = () => {
//     let rowElements = [];
//     for (let j = 0; j <= 20; j++) {

//         rowElements.push(<MultElement />)
//     }

//     return rowElements;
// }

const MainContainer = () => {

    return (
        <div className="main-container">
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
            <MultElement />
        </div>
    )
}

export default MainContainer;
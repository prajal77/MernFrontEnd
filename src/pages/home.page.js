// const HomePage = () => {
//     return ("Home Page")
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css" //bootstrap css
// import "bootstrap"//full bootstrap js

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // name: "Prajwol Basnet",
            name: this.props.name,
            address: "Kathmandu"
        }
    }

    // state update
    testFunction = () => {
        this.setState({
            ...this.state,
            name: "Updated Name Value"
        })
    }

    render = () => {
        // view presentation
        return (
            <p>
                Your name is: {this.state.name}.
                <br />
                Your address is: {this.state.address}.
                <br />
                Your Props value is: {this.props.name}.
                <br />
                Your Date From Props is: {this.props.data.name + '' + this.props.data.email}
                <br />
                <button onClick={this.testFunction}>Update Me </button>
            </p>
        )
    }
}

export default HomePage
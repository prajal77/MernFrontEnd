// const HomePage = () => {
//     return ("Home Page")
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css" //bootstrap css
// import "bootstrap"//full bootstrap js
import { Carousel } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

class HomePage extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // name: "Prajwol Basnet",
    //         name: this.props.name,
    //         address: "Kathmandu",
    //         data: null
    //     }
    //     console.log("i am first call");
    // }

    // // state update
    // testFunction = () => {
    //     this.setState({
    //         ...this.state,
    //         name: "Updated Name Value"
    //     })
    // }
    // componentDidMount = () => {
    //     //api call
    //     this.setState({
    //         ...this.state,
    //         data: []
    //     })
    //     console.log("I am second call");
    // }

    // componentDidUpdate = () => {
    //     // code
    //     console.log("I am Third call");
    // }

    render = () => {
        // console.log("I am Render call");
        // view presentation
        return (
            // react fragment
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </>
        )
    }
}

export default HomePage
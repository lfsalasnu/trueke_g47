import React, { Component } from "react";
import App from "../App";
import Formulario from "./Formulario";
class Navegacion extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="nav">
                    <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                        </li>
                        <li className="nav-item text-white" role="presentation">
                            <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                        </li>

                    </ul>

                    <form class="d-flex ms-5" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="enlace1" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <App />
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Formulario/>
                    </div>
                    <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        Enlace3
                    </div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        Enlace4
                    </div>
                </div>
            </div>
        );
    }
}

export default Navegacion;
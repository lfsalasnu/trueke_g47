import React, { Component } from "react";
//import img1 from "./img1.png";

class Articulos extends Component {
    
    constructor(){
        super();
        this.state={
            nombre:''
        }
    }
    editar(){
        alert("Editando...");
    }
    
    render() {
        
        return (

            <div className="col-sm-4 text-center">
                {/* //row-cols-1 row-cols-md-3 g-4 */}
                <div className="card mt-4 bg-dark b border-white">
                    <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="bg-danger rounded-pill">Valor: {this.props.valor}</span>
                        <br/>
                        <span className="bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                        <br/>
                        <span className="bg-primary rounded-pill">Cantidad: {this.props.cantidad}</span>
                        <br/>
                        <button formTarget="#formulario1" className="btn btn-primary border mx-auto me-2" onClick={this.editar}>Editar</button>
                        <button className="btn btn-danger border mx-auto" >Eliminar</button>
                    </div>
                </div>

                <div className="modal fade" id="formulario1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default Articulos;
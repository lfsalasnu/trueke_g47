import React, { Component } from "react";
//import img1 from "./img1.png";
import axios from "axios";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";
import Editar from "./Editar";
class Articulos extends Component {

    constructor() {
        super();
        this.state = {
        }

        this.eliminar = this.eliminar.bind(this)
    }
    // botones(usuario, id) {
    //     if (usuario == "Luis") {
    //         return (
    //             <div>
    //                 <button formTarget={"#" + id} className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
    //                 <button formTarget="#editar" className="btn btn-danger border mx-auto mt-1" onClick={this.eliminar}>Eliminar</button>
    //             </div>
    //         )
    //         //this.state.btn1;
    //     } else {
    //         return (
    //             <button formTarget="#formulario1" className="btn btn-success border mx-auto mt-1" onClick={this.intercambiar}>Intercambiar</button>
    //         )
    //     }
    // }
    editar() {
        <div>
            {/* <Link to="/Editar"></Link> */}
            <Editar />

        </div>
        alert("Editando...");
        //axios.post("")
    }

    intercambiar() {
        alert('Intercambiando...')
    }

    eliminar(e) {
        let direccion = "http://localhost:5000/servicios/borrar/" + e.target.name
        axios.get(direccion)
            .then(dato => alert("borrado " + e.target.name))

    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    render() {

        return (

            <div className="col-sm-4 text-center">
                {/* //row-cols-1 row-cols-md-3 g-4 */}
                <div className="card mt-4 bg-dark b border-white">
                    <img height="400" width="auto" src={this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="bg-danger rounded-pill">Valor: {this.props.valor}</span>
                        <br />
                        <span className="bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                        <br />
                        <span className="bg-primary rounded-pill">Cantidad: {this.props.cantidad}</span>
                        <br />

                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro"+ this.props.id}>Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                        <button className="btn btn-success border mx-auto mt-1" onClick={this.intercambiar}>Intercambiar</button>
                    </div>
                </div>



                {/* Eliminar */}
                <div className="modal fade" id={"articulo" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                                Desea eliminar el articulo {this.props.id}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Editar */}
                <div className="modal fade" id={"editar_cuadro"+ this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Articulo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Articulo</label>
                                        <input type="text" className="form-control" id="recipient-name" text={this.props.nombre}/>
                                    </div>;
                                    <div className="mb-1">
                                        <label for="message-text" className="col-form-label text-dark text-st" >Descripción</label>
                                        <textarea className="form-control" id="message-text" name="descripcion" value={this.props.descripcion} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start" >Cantidad</label>
                                        <input type="number" className="form-control" id="recipient-name" value={this.props.cantidad}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Imagen</label>
                                        <input type="text" className="form-control" id="recipient-name" value={this.props.imagen}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start" >Valor</label>
                                        <div className="form-group">
                                            <select name="valor" className="form-control" text={this.props.valor}>
                                                <option>Alto</option>
                                                <option>Medio</option>
                                                <option>Bajo</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-success">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);

    }
}

export default Articulos;
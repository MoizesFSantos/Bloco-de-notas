import React, { Component } from "react";
import CardNotas from "../cardNota/CardNotas";
import "./estilo.css";
class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNotas 
                                indice={index}
                                apagarNota={this.props.apagarNota} 
                                titulo={nota.titulo} 
                                texto={nota.texto}
                                categoria={nota.categoria}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
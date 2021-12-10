import React, { Component } from "react";
import CardNotas from "./cardNota/CardNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias, index) => {
                    return (
                        <li key={index}>
                            <div>{categorias}</div>
                            <CardNotas />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
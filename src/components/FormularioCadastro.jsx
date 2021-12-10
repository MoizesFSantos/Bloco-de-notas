import React, { Component } from "react";

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva a sua nota" />
                <button>Criar nota</button>
            </form>
        );
    }
}
export default FormularioCadastro;
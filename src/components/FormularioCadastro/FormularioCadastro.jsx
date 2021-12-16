import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor() {
        super();
        this.titulo = "";
        this.texto = "";
    }
    handleMudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }
    handleMudancaTexto(evento) {
        this.texto = evento.target.value;
    }
    criarNota(evento){
        console.log(`uma nova nota foi criada ${this.titulo}, ${this.texto}`)
    }
    render() {
        return (
            <form className="form-cadastro"
            onSubmit={this.criarNota.bind(this)}>
                <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this.handleMudancaTitulo.bind(this)} />
                <textarea placeholder="Escreva a sua nota" className="form-cadastro_input" onChange={this.handleMudancaTexto.bind(this)} />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }
}
export default FormularioCadastro;
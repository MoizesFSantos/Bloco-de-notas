import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import React, { Component } from "react";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas"
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;

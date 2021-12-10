import React from 'react';
import './estilo.css'
class CardNotas extends React.Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva a sua nota</p>
            </section>
        );
    }
}


export default CardNotas;
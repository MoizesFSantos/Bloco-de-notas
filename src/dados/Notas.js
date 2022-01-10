export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this.inscritos = [];
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.novaNota.push(novaNota);
    }

    apagarNota(indice){
        this.notas.splice(indice, 1)
    }
    inscrever(func){
        this.inscritos.push(func);
    }

    notificar(){
        this.inscritos.forEach(func => func(this.categorias))
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria
    }
}
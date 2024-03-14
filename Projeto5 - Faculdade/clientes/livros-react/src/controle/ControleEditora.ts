import Editora from "../modelo/Editora";

const editoras : Array<Editora> = [
    new Editora(1, "Ediouro"),
    new Editora(2, "HarperCollins Brasil"),
    new Editora(3, "Editora JBC")
];

class ControleEditora{
       
    getEditoras(): Array<Editora> {
        return editoras;
    }
    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}
export default ControleEditora;
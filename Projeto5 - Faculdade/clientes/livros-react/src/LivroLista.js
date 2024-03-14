import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import React, { useState, useEffect } from 'react';

const controleEditora = new ControleEditora();
const controleLivro = new ControleLivro();

const LinhaLivro = ({livro, excluir}) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr >
            <td>
                <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
      const controleLivro = new ControleLivro();
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }, [carregado]);
  
    const excluir = (codigoLivro) => {
      const controleLivro = new ControleLivro();
      controleLivro.excluir(codigoLivro);
      setCarregado(false);
    };
  
    return (
      <main>
        <div className="container">
        <h1 className="text-center">Lista de Livros</h1>
        <table className="table table-bordered mt-4"  striped bordered hover size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Código</th>
              <th>Título</th>            
              <th>Editora</th>            
              <th>Resumo</th>
              <th>Autores</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
        </div>
      </main>
    );
  };

export default LivroLista;
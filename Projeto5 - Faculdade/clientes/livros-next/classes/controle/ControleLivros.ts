import Livro from "../modelo/Livro";

const livros : Array<Livro> = [
    new Livro(1, 1, "Jojo's Bizarre Adventure", "JoJo's conta a história da família Joestar, uma família cujos vários membros descobrem que estão destinados a derrubar inimigos sobrenaturais, tais como Dio Brando um vampiro semi-imortal, Yoshikage Kira um serial killer e Diavolo um líder de gangue usando poderes únicos que possuem", ["Hirohiko Araki"]),
    new Livro(2, 2, "Little Witch Academia", "Atsuko Kagari (Akko) é uma garota comum que desenvolveu seu gosto por magia desde o dia em que viu seu primeiro show de magia. Ela ficou tão encantada com a performance da apresentadora Shiny Chariot que passou a sonhar em ser uma bruxa tão legal quanto ela.", ["Masahiko Otsuka"]),
    new Livro(3, 3, "Haikyuu!!", "Haikyuu!! segue os passos de Shoyo Hinata, um garoto que se apaixona pelo vôlei após assistir a uma partida do campeonato nacional pela televisão. Ele começa a praticar o esporte e constrói uma equipe do seu colégio no último ano do ensino fundamental, mas que é derrotada pelos favoritos comandados por Tobio Kageyama.", ["Haruichi Furudate"]),
];

class ControleLivro {
    
    obterLivros(): Array<Livro> {
        return livros;
    } 

    incluirLivros(novoLivro: Livro): void {
        const novo = Math.max(...livros.map(l => l.codigo)) + 1;
        novoLivro.codigo = novo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if(index !== -1){
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;
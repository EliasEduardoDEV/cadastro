class Jogo {
    constructor(nome, genero) {
        this.nome = nome;
        this.genero = genero;
    }
}

let jogos = [];
let indexEdicao = -1;

function atualizarTabela() {
    const tabela = document.getElementById("tabelaJogos");
    tabela.innerHTML = "";
    jogos.forEach((jogo, index) => {
        const row = tabela.insertRow();
        row.innerHTML = `
            <td>${jogo.nome}</td>
            <td>${jogo.genero}</td>
            <td>
                <button class="edit" onclick="editarJogo(${index})">Editar</button>
                <button class="delete" onclick="deletarJogo(${index})">Excluir</button>
            </td>
        `;
    });
}

function adicionarJogo() {
    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;

    if (nome && genero) {
        const novoJogo = new Jogo(nome, genero);
        jogos.push(novoJogo);
        atualizarTabela();
        limparCampos();
    } else {
        alert("Preencha todos os campos!");
    }
}

function editarJogo(index) {
    document.getElementById("nome").value = jogos[index].nome;
    document.getElementById("genero").value = jogos[index].genero;
    document.getElementById("btnAtualizar").style.display = "inline-block";
    indexEdicao = index;
}

function atualizarJogo() {
    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;

    if (nome && genero) {
        jogos[indexEdicao].nome = nome;
        jogos[indexEdicao].genero = genero;
        atualizarTabela();
        limparCampos();
        document.getElementById("btnAtualizar").style.display = "none";
        indexEdicao = -1;
    } else {
        alert("Preencha todos os campos!");
    }
}

function deletarJogo(index) {
    jogos.splice(index, 1);
    atualizarTabela();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("genero").value = "";
}

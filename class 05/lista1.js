// Salva o maior id ja atribuido a algum produto
let maxId = -1;

// Variavel global que salva uma lista com todos os produtos da loja
// produto = {
//   id: 0,
//   descricao: "Produto 0",
//   preco: 10.31,
// }
let estoque = [];

// Salva todas as operações que podem ser realizadas em cima do estoque
let operacoes = {
  // Gera um novo id unico para novos produtos
  gerarNovoId: () => {
    maxId++;
    return maxId;
  },

  // Insere um novo produto no estoque
  inserirProduto: (descricao, preco) => {
    if (!preco || isNaN(preco) || preco < 0)
      return -1;
    estoque.push({
      id: operacoes.gerarNovoId(),
      descricao,
      preco: parseFloat(preco),
    });
    return 0;
  },

  // Remove do estoque um produto com o id especificado
  removerProduto: id => {
    for (let index = 0; index < estoque.length; index++) {
      if (estoque[index].id === id) {
        estoque.splice(index, 1);
        return 0;
      }
    }
    return -1;
  },

  // Encontra um produto com o id especificado
  encontrarPeloId: id => {
    let result = -1;
    estoque.forEach(produto => {
      if (produto.id === id)
        result = produto;
    })
    return result;
  },

  // Retorna uma tabela com todos os itens do estoque
  tabelaEstoque: () => {
    let tabela = "Id | Descricao | Preco\n----------------------\n";
    for (let { id, descricao, preco } of estoque)
      tabela += `${id} | ${descricao} | R$${preco}\n`
    return tabela;
  },

  // Retorna uma tabela com todos as descrições unicas de produtos cadastrados
  tabelaDescricoes: () => {
    let descricoes = [...new Set(estoque.map(produto => produto.descricao))];
    let tabelaProdutos = "Descricao\n---------\n";
    for (let descricao of descricoes)
      tabelaProdutos += `${descricao}\n`
    return tabelaProdutos;
  },

  // Retorna uma tabela com todos os produtos do estoque que contem a descrição indicada
  produtosPelaDescricao: descricao => {
    let tabelaProdutos = "Descricao | Preco\n-----------------\n";
    estoque.forEach(produto => {
      if (produto.descricao === descricao)
        tabelaProdutos += `${produto.descricao} | R$${produto.preco}\n`;
    });
    return tabelaProdutos;
  },

  // Retorna total da loja, soma do preço de todos os produtos do estoque
  patrimonioLoja: () => {
    let patrimonio = 0;
    estoque.forEach(produto => {
      patrimonio += produto.preco;
    });
    return patrimonio;
  }
}

// Loop principal onde ocorre a interacao com usuario
let mainLoop = () => {
  let continuar = true;
  while (continuar) {
    let acao = prompt(`O que deseja fazer:
      1: Cadastrar novo produto
      2: Excluir produto
      3: Encontrar produto
      4: Produtos em estoque
      5: Descrições dos produtos cadastrados
      6: Produtos com determinada descricao
      7: Patrimonio da loja
      8: Sair
    `);

    switch (acao) {
      // Cadastrar novo produto
      case "1":
        let novaDescricao = prompt("Digite a descrição do novo produto:")
        let novoPreco = prompt("Digite o preco do novo produto:")
        let resultInserir = operacoes.inserirProduto(novaDescricao, novoPreco);
        if (resultInserir === -1)
          alert("Erro ao inserir produto, preço invalido");
        else
          alert("Produto inserido com sucesso");
        break;

      // Excluir produto
      case "2":
        let produtoExcluir = prompt(`Digite o id do produto que deseja remover:`);
        if (operacoes.removerProduto(parseInt(produtoExcluir)) === -1)
          alert("Erro ao excluir produto, id invalido");
        else
          alert("Produto excluido com sucesso");
        break;

      // Encontrar produto
      case "3":
        let produtoEncontrar = prompt(`Digite o id do produto que deseja encontrar:`);
        let produtoEncontrado = operacoes.encontrarPeloId(parseInt(produtoEncontrar));
        if (produtoEncontrado === -1)
          alert("Erro ao encontrar produto, id invalido");
        else
          alert(`Id: ${produtoEncontrado.id}\nDescrição: ${produtoEncontrado.descricao}\nPreço: R$${produtoEncontrado.preco}`);
        break;

      // Produtos em estoque
      case "4":
        alert(operacoes.tabelaEstoque());
        break;

      // Descrições dos produtos cadastrados
      case "5":
        alert(operacoes.tabelaDescricoes());
        break;

      // Produtos com determinada descricao
      case "6":
        let descricaoEncontrar = prompt(`Digite a descrição do produto que deseja encontrar:`);
        alert(operacoes.produtosPelaDescricao(descricaoEncontrar));
        break;
      
      // Patrimonio da loja
      case "7":
        alert(`O patrimonio total da loja é: ${operacoes.patrimonioLoja()}`)
        break;

      // Sair
      case null:
      case "8":
        continuar = false;
        break;
    }
  }
}

mainLoop();
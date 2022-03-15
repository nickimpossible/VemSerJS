class Validacoes {
    validarIdColaborador(id) {
      if (isNaN(id) || id < 0)
        return -1;
      return 0;
    }
  
    validarNomeColaborador(nome) {
      if (typeof nome !== "string")
        return -1;
      return 0;
    }
  
    validarColaborador(id, nome) {
      if (this.validarIdColaborador(id) === -1 ||
        this.validarNomeColaborador(nome) === -1)
        return -1;
      return 0;
    }
  
    validarDiaMarcacao(dia) {
      if (isNaN(dia) || dia < 0)
        return -1;
      return 0;
    }
  
    validarHorasMarcacao(horas) {
      if (isNaN(horas) || horas <= 0 || horas > 24)
        return -1;
      return 0;
    }
  
    validarMarcacao(dia, horas) {
      if (this.validarDiaMarcacao(dia) === -1 ||
        this.validarHorasMarcacao(horas) === -1)
        return -1;
      return 0;
    }
  }
  let validador = new Validacoes();
  
  class Marcacao {
    constructor(dia, horas) {
      this.dia = dia;
      this.horas = horas;
  
      this.marcacaoValida = validador.validarMarcacao(this.dia, this.horas);
    }
  }
  
  class Colaborador {
    constructor(id, nome) {
      this.id = id;
      this.nome = nome;
  
      this.colaboradorValido = validador.validarColaborador(this.id, this.nome);
      
      this.marcacoesPonto = [];
    }
  
    marcarPonto(dia, horas) {
      console.log(dia, horas)
      let novaMarcacao = new Marcacao(dia, horas)
      if (validador.marcacaoValida === -1)
        return -1;
  
      this.marcacoesPonto.push(novaMarcacao)
      return 0;
    }
  
    verificarMarcacaoDia(dia) {
      for (let marcacao of this.marcacoesPonto)
        if (marcacao.dia === dia)
          return 0;
      return -1;
    }
  }
  
  class Empresa {
    constructor() {
      this.maxId = -1;
      this.colaboradores = [];
    }
  
    verificarColaborador(id) {
      for (let colaborador of this.colaboradores)
        if (colaborador.id === id)
          return 0;
      return -1;
    }
  
    cadastrarColaborador(nome) {
      this.maxId++;
      let novoColaborador = new Colaborador(this.maxId, nome);
      if (novoColaborador.colaboradorValido === -1)
        return -1;
  
      this.colaboradores.push(novoColaborador);
      return this.maxId;
    }
  
    marcarPontoColaborador(id, dia, horas) {
      for (let colaborador of this.colaboradores)
        if (colaborador.id === id)
          return colaborador.marcarPonto(dia, horas);
      return -1;
    }
  
    listarColaboredores() {
      let tabelaColaboradores = "";
      for (let colaborador of this.colaboradores)
        tabelaColaboradores += `${colaborador.id} - ${colaborador.nome}\n`
      return tabelaColaboradores;
    }
  
    colaboradoresSemPonto(dia) {
      let tabelaColaboradores = "";
      for (let colaborador of this.colaboradores)
        if (colaborador.verificarMarcacaoDia(dia) === -1)
          tabelaColaboradores += `${colaborador.id} - ${colaborador.nome}\n`
      return tabelaColaboradores;
    }
  }
  
  let mainLoop = () => {
    let empresa = new Empresa();
  
    let continuar = true;
    while (continuar) {
      let result = 0;
      let acao = prompt(`O que deseja fazer:
        1: Cadastrar Colaborador
        2: Marcar Ponto
        3: Ver Lista de Colaboradores
        4: Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto
        9: Encerrar
      `);
  
      switch (acao) {
        // Cadastrar Colaborador
        case "1":
          let nome = prompt("Digite o nome do novo colaborador:");
          result = empresa.cadastrarColaborador(nome);
          if (result === -1)
            alert("Erro ao cadastrar usuario");
          else
            alert(`Usuario cadastrado com sucesso, seu id é: ${result}`);
          break;
  
        // Marcar Ponto
        case "2":
          let id = prompt("Digite o id do usuario que deseja marcar o ponto:");
          if (empresa.verificarColaborador(parseInt(id)) === -1){
            alert("Colaborador não existe");
            break;
          }
          let novoDia = prompt("Digite qual foi o dia trabalhado:");
          let horas = prompt("Digite quantas horas foram trabalhadas no dia:");
          result = empresa.marcarPontoColaborador(parseInt(id), novoDia, horas);
          if (result === -1)
            alert("Erro ao marcar o ponto");
          else
            alert("Ponto marcado com sucesso");
          break;
  
        // Ver Lista de Colaboradores
        case "3":
          alert(`Lista de colaboradores:\n${empresa.listarColaboredores()}`)
          break;
  
        // Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto
        case "4":
          let dia = prompt("Você quer saber quem bateu o ponto em qual dia:")
          alert(`Lista de colaboradores que não marcaram o ponto no dia ${dia}:\n${empresa.colaboradoresSemPonto(dia)}`)
          break;
  
        // Encerrar
        case null:
        case "9":
          continuar = false;
          break;
      }
    }
  }
  
  mainLoop();
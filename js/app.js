let totalGeral = 0; // Inicializando totalGeral para evitar erros
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    if (!produto) {
        alert("Por favor, selecione um produto.");
        return; // Sai da função se não houver produto selecionado
    }
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value, 10); // parseInt com base 10

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return; // Sai da função se a quantidade for inválida
    }

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;

    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

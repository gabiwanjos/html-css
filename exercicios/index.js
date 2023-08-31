const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
let somaTotal = 0; // valor total

// Usando um loop for para somar os valores
for (let i = 0; i < valoresProdutos.length; i++) {
  somaTotal += valoresProdutos[i];
}

console.log(somaTotal);
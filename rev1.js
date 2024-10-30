let salario, desconto, salarioLiquido
salario = 5000
desconto = Number(prompt("Digite o valor do desconto:"))
calculaDescontoSalario()
function calculaDescontoSalario(){
    salarioLiquido = salario - desconto
    alert("Salário Líquido: R$" + salarioLiquido)
}

